
express = require 'express'
router = express.Router()

router.post '/testme', (req, res) ->
  console.log req.body
  res.send req.body

module.exports = router
