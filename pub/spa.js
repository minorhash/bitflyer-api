var spawn = require('child_process').spawn;
var child = spawn('/home/koji/codes/fly/cmd/simp.sh');
child.stdout.on('data', function(data) {
        console.log(data);
//        return data;
exports.MyOut=function(){

       return data; 
};
            //Here is where the output goes
});
child.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
            //Here is where the error output goes
});
child.on('close', function(code) {
//        console.log('closing code: ' + code);
            //Here you can get the exit code of the script
});
