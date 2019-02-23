var request = require('request');
var crypto = require('crypto');

var key = 'PYBqczy4PbGyAnXVYj4knx';
var secret = 'Q7fuC7zpKZoxXkK+YAx1DBOvt9Rde7U06XZcWRglYlo=';

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getexecutions';
var text = timestamp + method + path;
var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');

var body = JSON.stringify({
    product_code: 'FX_BTC_JPY'
});



var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
//    body:body,
    headers: {
        'ACCESS-KEY': key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign
    }
};
request(options, function (err, response, pay) {
//console.log(pay);

json=JSON.parse(pay);
console.log(json.length);
for(i=0;i<json.length;i++){
var pri0=json[i].price.toLocaleString();
var sid0=json[i].side;
var dat0=json[i].exec_date;

var com=" : ";
console.log(sid0.concat(com).concat(pri0).concat(dat0));
}
//


//console.log(sid1.concat(com).concat(pri1).concat(dat1));


});
