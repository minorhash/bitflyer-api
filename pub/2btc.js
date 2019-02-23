var request = require('request');
var crypto = require('crypto');

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/getticker';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;

var body = JSON.stringify({
    product_code: 'BTC_JPY'
});

var text = timestamp + method + path + body;
//var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');

var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    body: body,
    headers: {
        'Content-Type': 'application/json'
    }
};

request(options, function (err, response, payload) {
    console.log(payload);
});

//request(url, function (err, response, payload) {
//var pay=JSON.parse(payload);
//console.log(pay[0]);
//});
