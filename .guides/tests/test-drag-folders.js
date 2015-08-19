var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';  

var basedir = '/home/codio/workspace/05-destination'  
walk.walk(basedir, function(err, results) {

  retStr = '';     
  if (err) {
    console.log(err)
    callback({syserr: true, success: false, msg: err});
  }

  if (!results || results.indexOf(basedir + '/html') == -1)
    retStr += 'Can\'t find the html folder in the 05-destination folder.\n';
  if (!results || results.indexOf(basedir + '/img') == -1)
    retStr += 'Can\'t find the img folder in the 05-destination folder.\n';
  if (!results || results.indexOf(basedir + '/text') == -1)
    retStr += 'Can\'t find the text folder in the 05-destination folder.\n';

  if (retStr=='') {
    process.stdout.write('Well done!!!')
    process.exit(0);
  }
  else {
    process.stdout.write(retStr)
    process.exit(1);
  }

});
