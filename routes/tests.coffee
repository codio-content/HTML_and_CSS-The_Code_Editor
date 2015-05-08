
express = require 'express'
router = express.Router()


router.post '/run', (req, res) ->
  console.log req.body
  switch req.body.testid
    when "test-create"
      t = require '/home/codio/workspace/.guides/tests/test-create.js'  
      t.test((data) ->
        console.log(data)    
        res.send data
      )
    else
      res.send {syserror: true, success: false, msg: "Invalid test id"}
    
module.exports = router
