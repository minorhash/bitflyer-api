var request = require('request');

var path = '/v1/getprices';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;
request(url, function (err, response, payload) {

var pay=JSON.parse(payload);

var json=JSON.stringify(pay);

console.log(pay);
});
