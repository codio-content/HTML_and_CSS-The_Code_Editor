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


walk('../../04-drag-tougher', function(err, results) {

  if (err) throw err;

  if (results.indexOf('/home/codio/workspace/04-drag-tougher/img/jpg/lamb1.jpg') == -1)
    retStr += 'lamb1.jpg is not where it should be. ';
  if (results.indexOf('/home/codio/workspace/04-drag-tougher/img/jpg/lamb2.jpg') == -1)
    retStr += 'lamb2.jpg is not where it should be. ';
  if (results.indexOf('/home/codio/workspace/04-drag-tougher/img/jpg/not-lamb.jpg') == -1)
    retStr += 'not-lamb.jpg is not where it should be. ';
  if (results.indexOf('/home/codio/workspace/04-drag-tougher/img/png/lamb3.png') == -1)
    retStr += 'lamb3.png is not where it should be. ';
    
  if (retStr=='')
    console.log(0, 'Well done!');
  else
    console.log(1, retStr);

});


