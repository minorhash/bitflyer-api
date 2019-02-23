var request = require('request');
var crypto = require('crypto');

var key = 'PYBqczy4PbGyAnXVYj4knx';
var secret = 'Q7fuC7zpKZoxXkK+YAx1DBOvt9Rde7U06XZcWRglYlo=';

var timestamp = Date.now().toString();
var method = 'POST';
var path = '/v1/me/cancelallchildorders';

var body = JSON.stringify({
	product_code:"BTC_JPY"	
});


var text = timestamp + method + path + body;
var sign = crypto.createHmac('sha256',
 secret).update(text).digest('hex');
var options = {    url: 'https://api.bitflyer.jp' + path,
    method: method,
    body: body,
    headers: {        'ACCESS-KEY': key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign,
        'Content-Type': 'application/json'    }};
request(options,
 function (err,
 response,
 payload) {    console.log(payload);
});

