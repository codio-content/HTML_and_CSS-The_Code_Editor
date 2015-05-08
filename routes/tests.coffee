
express = require 'express'
router = express.Router()


router.post '/run', (req, res) ->
  console.log req.body
  switch req.body.testid
    when "test-create"
      t = require '/home/codio/workspace/.guides/tests/test-create.js'  
    when "test-rename"
      t = require '/home/codio/workspace/.guides/tests/test-rename.js'  
    when "test-folder-1"
      t = require '/home/codio/workspace/.guides/tests/test-folder-1.js'        
    else
      res.send {syserror: true, success: false, msg: "Invalid test id"}
      return

  t.test (data) ->
    console.log(data)    
    res.send data        
      
    
module.exports = router
