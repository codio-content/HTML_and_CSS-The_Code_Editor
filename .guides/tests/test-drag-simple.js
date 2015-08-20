var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';  

walk.walk('/home/codio/workspace/04-drag-challenge', function(err, results) {

   retStr = '';     
   if (err) {
     console.log(err)
     callback({syserr: true, success: false, msg: err});
   }

  if (results.indexOf('/home/codio/workspace/04-drag-challenge/html/index.html') == -1)
    retStr += 'index.html is not where it should be.\n';
  if (results.indexOf('/home/codio/workspace/04-drag-challenge/html/page2.html') == -1)
    retStr += 'page2.html is not where it should be.\n';

  if (results.indexOf('/home/codio/workspace/04-drag-challenge/img/lamb1.jpg') == -1)
    retStr += 'lamb1.jpg is not where it should be.\n';
  if (results.indexOf('/home/codio/workspace/04-drag-challenge/img/lamb2.jpg') == -1)
    retStr += 'lamb2.jpg is not where it should be.\n';
  if (results.indexOf('/home/codio/workspace/04-drag-challenge/img/lamb3.png') == -1)
    retStr += 'lamb3.png is not where it should be.\n';
  if (results.indexOf('/home/codio/workspace/04-drag-challenge/img/not-lamb.jpg') == -1)
    retStr += 'lamb1.jpg is not where it should be.\n';

  if (results.indexOf('/home/codio/workspace/04-drag-challenge/text/mary1.txt') == -1)
    retStr += 'mary1.txt is not where it should be.\n';
  if (results.indexOf('/home/codio/workspace/04-drag-challenge/text/mary2.txt') == -1)
    retStr += 'mary2.txt is not where it should be.\n';

  if (retStr=='') {
    process.stdout.write('Well done!!!')
    process.exit(0);
  }
  else {
    process.stdout.write(retStr)
    process.exit(1);
  }

});


