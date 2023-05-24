import { merge, chunk, flatten } from 'lodash-es';
import request from 'request';
import { v4 as uuidv4 } from 'uuid';
import { type Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Root as MdastRoot, Text } from 'mdast'

export interface AzureTranslateOptions {
  from?: string;
  to: string;
  subscriptionKey: string;
  subscriptionRegion?: string;
}

const translate = (
  textArr: Array<{text: string}>,
  { from, to, subscriptionKey, subscriptionRegion }: AzureTranslateOptions
): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!subscriptionKey) {
      reject(new Error('Your subscription key is not set.'));
    }

    const options = {
      method: 'POST',
      baseUrl: 'https://api.cognitive.microsofttranslator.com/',
      url: 'translate',
      qs: merge(
        {
          'api-version': '3.0',
          from: 'en',
          to: 'zh',
        },
        { from, to }
      ),
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString(),
      },
      body: textArr,
      json: true,
    };

    if (subscriptionRegion) {
      (options.headers as Record<string, string>)['Ocp-Apim-Subscription-Region'] = subscriptionRegion;
    }
    request(options, function (err, res, body) {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
};

export const createAzureTranslateService = (options: AzureTranslateOptions): Plugin<[], MdastRoot> => {
  // mutable function which will replace values of all the text nodes in mdast
  const handleContents = (contents: Text[]) => {
    return Promise.all(chunk(contents.map(i => ({
        text: i.value
      })), 100).map(textArr => translate(textArr, options)))
        .then(res => {
            flatten(res).map((item, index) => {
                contents[index].value = item.translations[0].text
            })
        })
  }
  // return unified.js plugin
  return () => {
    return async (tree: MdastRoot) => {
        const transform = async (ast: MdastRoot) => {
          let contents: Text[] = []
          visit(ast, 'text', (node) => {
            contents.push(node)
          })
          await handleContents(contents)
        }
        await transform(tree)
      }
  }
}