var request = require('request');

var path = '/v1/getprices';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;
request(url, function (err, response, payload) {

var pay=JSON.parse(payload);

var json=JSON.stringify(pay);

console.log(pay[1].product_code,":",pay[1].rate);

var len=pay.length;
for(i=0;i<len;i++){

console.log(pay[i]);

}
//console.log(pay[1]);

//console.log(pay[0].rate.toLocaleString());
});
