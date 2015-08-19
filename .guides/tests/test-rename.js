var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';

  walk.walk('/home/codio/workspace/02-rename-files', function(err, results) {
    retStr = '';      
     if (err) {
       console.log(err)
       callback({syserr: true, success: false, msg: err});
     }
    
    if (results.indexOf('/home/codio/workspace/02-rename-files/calf.jpg') == -1) {
      retStr += 'Could not find calf.jpg.\n';
    }
    if (results.indexOf('/home/codio/workspace/02-rename-files/lamb.jpg') == -1) {
      retStr += 'Could not find lamb.jpg.\n';
    }
    
    if (retStr=='') {
      process.stdout.write('Well done!!!')
      process.exit(0);
    }
    else {
      process.stdout.write(retStr)
      process.exit(1);
    }
    
  });


