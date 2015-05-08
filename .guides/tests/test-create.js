var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';  

exports.test = function(callback) {
   walk.walk('/home/codio/workspace/01-create-files', function(err, results) {
     retStr = '';     
     if (err) {
       console.log(err)
       callback({syserr: true, success: false, msg: err});
     }

     if (results.indexOf('/home/codio/workspace/01-create-files/first.txt') == -1) {
       retStr += 'Could not find first.txt. ';
     }
     if (results.indexOf('/home/codio/workspace/01-create-files/second.txt') == -1) {
       retStr += 'Could not find second.txt. ';
     }
     if (retStr=='') {
       console.log(0, 'Well done!');
       callback({syserr: false, success: true, msg: 'Well done!!!'});
     }
     else {
       console.log(1, retStr);
       callback({syserr: false, success: false,  msg: retStr});
     }
   });
};

