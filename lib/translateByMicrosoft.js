const merge = require('lodash.merge')
const request = require('request')
const { v4: uuidv4 } = require('uuid')

module.exports.translate = (textArr, { from, to, subscriptionKey, region }) => {
  return new Promise((resolve, reject) => {
    if (!subscriptionKey) {
      reject(new Error('Your subscription key is not set.'))
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
    }

    if (region) {
      options.headers['Ocp-Apim-Subscription-Region'] = region
    }

    console.log(options)

    request(options, function (err, res, body) {
      if (err) {
        reject(err)
      }
      resolve(body)
    })
  })
}
