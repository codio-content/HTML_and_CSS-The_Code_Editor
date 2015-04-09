var fs = require('fs');
var path = require('path');


var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results.push(file);
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};


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

walk('../../03-folders', function(err, results) {
  
  var retStr = '';

  if (err) throw err;

  if (!check('/home/codio/workspace/03-folders/subfolder1', results))
    retStr = 'Could not find subfolder1. ';
  if (!check('/home/codio/workspace/03-folders/subfolder2', results))
    retStr += 'Could not find subfolder2. ';
  if (!check('/home/codio/workspace/03-folders/subfolder1/file1.txt', results))
    retStr += 'Could not find file1.txt in subfolder2. ';
  if (!check('/home/codio/workspace/03-folders/subfolder2/file2.txt', results))
    retStr += 'Could not find file2.txt in subfolder2. ';
 
  if (retStr=='')
    console.log(0, 'Well done!');
  else
    console.log(1, retStr);

});


