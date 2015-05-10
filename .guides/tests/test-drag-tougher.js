var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';  

exports.test = function(callback) {

  var basedir = '/home/codio/workspace/04-drag-tougher/'
  walk.walk(basedir, function(err, results) {

    retStr = '';     
    if (err) {
      console.log(err)
      callback({syserr: true, success: false, msg: err});
    }

    if (!results || results.indexOf(basedir + 'img/jpg/lamb1.jpg') == -1)
      retStr += 'lamb1.jpg is not where it should be.\n';
    if (!results || results.indexOf(basedir + 'img/jpg/lamb2.jpg') == -1)
      retStr += 'lamb2.jpg is not where it should be.\n';
    if (!results || results.indexOf(basedir + 'img/jpg/not-lamb.jpg') == -1)
      retStr += 'not-lamb.jpg is not where it should be.\n';
    if (!results || results.indexOf(basedir + 'img/png/lamb3.png') == -1)
      retStr += 'lamb3.png is not where it should be.\n';

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
