var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';  

walk.walk('/home/codio/workspace/01-create-files', function(err, results) {
   retStr = '';     
   if (err) {
     process.stdout.write(err);
     process.exit(1);
   }

   if (results.indexOf('/home/codio/workspace/01-create-files/first.txt') == -1) {
     retStr += 'Could not find first.txt.\n';
   }
   if (results.indexOf('/home/codio/workspace/01-create-files/second.txt') == -1) {
     retStr += 'Could not find second.txt.\n';
   }
   if (retStr=='') {
     process.stdout.write('Well done!!!')
     process.exit(0);
   }
   else {
     process.stdout.write(retStr);
     process.exit(1);
   }
 });

