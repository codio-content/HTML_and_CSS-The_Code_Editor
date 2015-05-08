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

exports.test = function(callback) {

  walk.walk('/home/codio/workspace/03-folders', function(err, results) {

    retStr = '';      
    if (err) {
      console.log(err)
      callback({syserr: true, success: false, msg: err});
    }

    if (!check('/home/codio/workspace/03-folders/subfolder1', results)) {
      retStr = 'Could not find subfolder1. ';
    }
    
    if (!check('/home/codio/workspace/03-folders/subfolder2', results)) {
      retStr += 'Could not find subfolder2. ';
    }
    
    if (!check('/home/codio/workspace/03-folders/subfolder1/file1.txt', results)) {
      retStr += 'Could not find file1.txt in subfolder2. ';
    }
    
    if (!check('/home/codio/workspace/03-folders/subfolder2/file2.txt', results)) {
      retStr += 'Could not find file2.txt in subfolder2. ';
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
  
}


