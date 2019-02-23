var request = require('request');
var crypto = require('crypto');
var fs=require('fs');
var request = require('request');
var config = JSON.parse(fs.readFileSync(__dirname+'/config.json', 'utf8'));

var key = 'PYBqczy4PbGyAnXVYj4knx';
var secret = 'Q7fuC7zpKZoxXkK+YAx1DBOvt9Rde7U06XZcWRglYlo=';

var timestamp = Date.now().toString();
var method = 'POST';
var path = '/v1/me/sendchildorder';

var arg2=process.argv[2];
var arg3=process.argv[3];

var body = JSON.stringify({
    product_code: 'FX_BTC_JPY',
    child_order_type: 'LIMIT',
    side: 'BUY',
    price: arg2,
    size: arg3
});

var text = timestamp + method + path + body;
var sign = crypto.createHmac('sha256', config.sec).update(text).digest('hex');

var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    body: body,
    headers: {
        'ACCESS-KEY': config.key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign,
        'Content-Type': 'application/json'
    }
};
request(options, function (err, response, payload) {
    console.log(payload);
});
