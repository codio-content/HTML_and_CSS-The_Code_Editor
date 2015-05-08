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


walk('../../05-destination', function(err, results) {

  if (err) throw err;

  if (results.indexOf('/home/codio/workspace/05-destination/html') == -1)
    retStr += 'Can\'t find the html folder in the 05-destination folder. ';
  if (results.indexOf('/home/codio/workspace/05-destination/img') == -1)
    retStr += 'Can\'t find the img folder in the 05-destination folder. ';
  if (results.indexOf('/home/codio/workspace/05-destination/text') == -1)
    retStr += 'Can\'t find the text folder in the 05-destination folder. ';
  
  if (retStr=='')
    console.log(0, 'Well done!');
  else
    console.log(1, retStr);

});


