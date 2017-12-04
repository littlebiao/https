
const https = require('https');
const querystring = require("querystring");


const postData = JSON.stringify({
    "msgtype": "text", 
    "text": {
        "content": "我就是我, 是不一样的烟火"
    }, 
    "at": {
        "atMobiles": [
            "18311097544", 
        ], 
//
    }

});

// Content-Type:application/json

const options = {
	hostname: 'oapi.dingtalk.com',
	port: 443,
	path: '/robot/send?access_token=c34fe7ca599cc039bff34f653abbb6cc1e94d6c7b290a847bb866c7d246de499',
	method: 'post',
    headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body

console.log(postData)


req.write(postData);
req.end();






// curl 'https://oapi.dingtalk.com/robot/send?access_token=c34fe7ca599cc039bff34f653abbb6cc1e94d6c7b290a847bb866c7d246de499' \
//    -H 'Content-Type: application/json' \
//    -d '
//   {"msgtype": "text", 
//     "text": {
//         "content": "我就是我, 是不一样的烟火"
//      }
//   }'





