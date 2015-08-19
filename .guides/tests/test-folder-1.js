var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');

function check(str, results) {
  //console.log('---', str);
  for (index = 0; index < results.length; index++) {  
    element = results[index];
    //console.log(element.substr(0, str.length));
    if (element.substr(0, str.length) == str)
      return true;
  }
  return false;
}

  walk.walk('/home/codio/workspace/03-folders', function(err, results) {

    retStr = '';      
    if (err) {
      console.log(err)
      callback({syserr: true, success: false, msg: err});
    }

    if (!check('/home/codio/workspace/03-folders/subfolder1', results)) {
      retStr = 'Could not find subfolder1.\n';
    }
    
    if (!check('/home/codio/workspace/03-folders/subfolder2', results)) {
      retStr += 'Could not find subfolder2.\n';
    }
    
    if (!check('/home/codio/workspace/03-folders/subfolder1/file1.txt', results)) {
      retStr += 'Could not find file1.txt in subfolder2.\n';
    }
    
    if (!check('/home/codio/workspace/03-folders/subfolder2/file2.txt', results)) {
      retStr += 'Could not find file2.txt in subfolder2.\n';
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



