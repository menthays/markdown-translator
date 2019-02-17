const request = require('request');
const uuidv4 = require('uuid/v4');

const key = '';

const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY || key;

module.exports.translate = (textArr) => {
  return new Promise((resolve, reject) => {
    if (!subscriptionKey) {
      reject(new Error('Environment variable for your subscription key is not set.'))
    };
    
    const options = {
      method: 'POST',
      baseUrl: 'https://api.cognitive.microsofttranslator.com/',
      url: 'translate',
      qs: {
        'api-version': '3.0',
        'to': 'zh',
      },
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      },
      body: textArr,
      json: true,
    };
    
    request(options, function(err, res, body){
      if(err) {
        reject(err);
      }
      resolve(body);
    });
  })
}

