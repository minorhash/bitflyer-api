var exec = require('child_process').execFile('/home/koji/codes/fly/cmd/simp.sh');

exec.stdout.on('data',function(data){
//console.log(typeof(data));
return data;

}); 


