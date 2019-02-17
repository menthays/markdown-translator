const crypto = require('crypto');
const request = require('request');

const appKey = 'zNDUHPoKJFeyYaF4';
const appId = '2112016848';
const translateApiUrl = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_texttrans';

const serialize = (obj) => {
  let str = "";
  for (let key in obj) {
    if (str !== "") {
      str += "&";
    }
    str += key + "=" + encodeURIComponent(obj[key]);
  }
  return str;
};

const getReqSign = (params, appKey) => {
  const md5 = crypto.createHash('md5');
  const partial = serialize(params);
  return md5.update(`${partial}&app_key=${appKey}`).digest('hex').toUpperCase();
}

const doTranslatePost = (text, type=0) => {
  return new Promise((resolve, reject) => {
    let params = {
      app_id: appId,
      nonce_str: Math.random().toString(36).substr(2),
      // source,
      // target,
      text,
      time_stamp: Math.floor(new Date().getTime()/1000),
      type,
    }
  
    params.sign = getReqSign(params, appKey);
  
    request.post({
        url: translateApiUrl,
        form: params
      },
      function (err, httpResponse, body) {
        if(err) {
          reject(err)
        }
        resolve(body)
      }
    )
  })
}

doTranslatePost('tiger and lion').then(console.log)