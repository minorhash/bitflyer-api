var request = require('request');
var crypto = require('crypto');
var cnf=require("./son/key.json")

var key =cnf.key
var sec =cnf.sec

var timestamp = Date.now().toString();
var method = 'POST';
var path = '/v1/me/cancelallchildorders';

var body = JSON.stringify({
	product_code:"BTC_JPY"
});


var text = timestamp + method + path + body;
var sign = crypto.createHmac('sha256',
 secret).update(text).digest('hex');
var opt= {    url: 'https://api.bitflyer.jp' + path,
    method: method,
    body: body,
    headers: {        'ACCESS-KEY': cnf.key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign,
        'Content-Type': 'application/json'    }};

request(opt,
 function (err,
 response,
 payload) {    console.log(payload);
});

