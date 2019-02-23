var request = require('request');

var path = '/v1/getpositions';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;
request(url, function (err, response, pay) {
obj=(JSON.parse(pay));

pri=obj.price.toLocaleString();

console.log(pri);
});

