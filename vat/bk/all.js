var request = require('request');
var crypto = require('crypto');

var key = 'PYBqczy4PbGyAnXVYj4knx';
var secret = 'Q7fuC7zpKZoxXkK+YAx1DBOvt9Rde7U06XZcWRglYlo=';

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getexecutions';
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
var   exe=JSON.parse(payload);
var len=exe.length
console.log("len:".concat(len));
console.log(exe[0]);

var comm=" : ";

for(var i=0; i<len; i++){

var sid=exe[i].side;
var dat=exe[i].exec_date;
var pri=exe[i].price.toLocaleString();
var siz=exe[i].size;
console.log(sid.concat(comm).concat(pri).concat(comm).concat(siz).concat(comm).concat(dat));
}

//   console.log(exe[0].side);

});
