var fs = require('fs');
var retStr = '';  

var basedir = '/home/codio/workspace/05-destination'  

fs.readdir(basedir, function(err, results) {
  
  retStr = '';    
  
  if (err) {
    process.stdout.write(err)
    process.exit(1);
  }

  if (!results || results.indexOf('html') == -1)
    retStr += 'Can\'t find the html folder in the 05-destination folder.\n';
  if (!results || results.indexOf('img') == -1)
    retStr += 'Can\'t find the img folder in the 05-destination folder.\n';
  if (!results || results.indexOf('text') == -1)
    retStr += 'Can\'t find the text folder in the 05-destination folder.\n';

  if (retStr=='') {
    process.stdout.write('Well done!!!')
    process.exit(0);
  }
  else {
    process.stdout.write(retStr)
    process.exit(1);
  }
  
})

