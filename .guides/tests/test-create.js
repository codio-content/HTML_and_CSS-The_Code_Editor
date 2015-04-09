var fs = require('fs');
var path = require('path');
var retStr = '';

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

walk('../../01-create-files', function(err, results) {
  if (err) throw err;
  if (results.indexOf('/home/codio/workspace/01-create-files/first.txt') == -1)
    retStr += 'Could not find first.txt. ';
  if (results.indexOf('/home/codio/workspace/01-create-files/second.txt') == -1)
    retStr += 'Could not find second.txt. ';
  if (retStr=='')
    console.log(0, 'Well done!');
  else
    console.log(1, retStr);
});

