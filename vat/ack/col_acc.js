var request = require('request');
var crypto = require('crypto');

var key = 'PYBqczy4PbGyAnXVYj4knx';
var secret = 'Q7fuC7zpKZoxXkK+YAx1DBOvt9Rde7U06XZcWRglYlo=';

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getcollateralaccounts';
var text = timestamp + method + path;
var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');

var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    headers: {
        'ACCESS-KEY': key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign
    }
};
request(options, function (err, response, payload) {
//    console.log(payload);
   col=JSON.parse(payload);
var   len=col.length;
   console.log(len);
var jpy=col[0].amount.toLocaleString();
var btc=col[1].amount.toLocaleString();

   console.log("JPY:".concat(jpy));
   console.log("BTC:".concat(btc));

});
