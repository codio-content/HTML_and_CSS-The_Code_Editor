var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';  

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
    if (!results || results.indexOf(basedir + 'img/jpg/calf.jpg') == -1)
      retStr += 'calf.jpg is not where it should be.\n';
    if (!results || results.indexOf(basedir + 'img/png/lamb3.png') == -1)
      retStr += 'lamb3.png is not where it should be.\n';

    if (retStr=='') {
      process.stdout.write('Well done!!!')
      process.exit(0);
    }
    else {
      process.stdout.write(retStr)
      process.exit(1);
    }

  });

