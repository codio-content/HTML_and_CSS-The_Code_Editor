var walk = require('/home/codio/workspace/.guides/tests/test-walk.js');
var retStr = '';  

exports.test = function(callback) {

  walk.walk('/home/codio/workspace/04-drag', function(err, results) {

     retStr = '';     
     if (err) {
       console.log(err)
       callback({syserr: true, success: false, msg: err});
     }

    if (results.indexOf('/home/codio/workspace/04-drag/html/index.html') == -1)
      retStr += 'index.html is not where it should be. ';
    if (results.indexOf('/home/codio/workspace/04-drag/html/page2.html') == -1)
      retStr += 'page2.html is not where it should be. ';

    if (results.indexOf('/home/codio/workspace/04-drag/img/lamb1.jpg') == -1)
      retStr += 'lamb1.jpg is not where it should be. ';
    if (results.indexOf('/home/codio/workspace/04-drag/img/lamb2.jpg') == -1)
      retStr += 'lamb2.jpg is not where it should be. ';
    if (results.indexOf('/home/codio/workspace/04-drag/img/lamb3.png') == -1)
      retStr += 'lamb3.png is not where it should be. ';
    if (results.indexOf('/home/codio/workspace/04-drag/img/not-lamb.jpg') == -1)
      retStr += 'lamb1.jpg is not where it should be. ';

    if (results.indexOf('/home/codio/workspace/04-drag/text/mary1.txt') == -1)
      retStr += 'mary1.txt is not where it should be. ';
    if (results.indexOf('/home/codio/workspace/04-drag/text/mary2.txt') == -1)
      retStr += 'mary2.txt is not where it should be. ';

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

