var request = require('request');
var crypto = require('crypto');

var key = 'PYBqczy4PbGyAnXVYj4knx';
var secret = 'Q7fuC7zpKZoxXkK+YAx1DBOvt9Rde7U06XZcWRglYlo=';

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getpermissions';

var body = JSON.stringify({
    product_code: 'BTC_JPY',
    child_order_type: 'LIMIT',
    side: 'BUY',
    price: 30000,
    size: 0.1
});

//key
//PYBqczy4PbGyAnXVYj4knx
//sec
//Q7fuC7zpKZoxXkK+YAx1DBOvt9Rde7U06XZcWRglYlo=

var text = timestamp + method + path + body;

var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');

var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    headers: {
        'ACCESS-KEY': key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign,
        'Content-Type': 'application/json'
    }
};
request(options, function (err, response, payload) {
    console.log(payload);
});
