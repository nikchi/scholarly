const express = require('express')
const router = express.Router()
const page = require('../data/page')

router.get('/', (req, res) => {
  res.render('page')
})

router.post('/', (req, res) => {
  page.getBoth(req.body.first, req.body.second).then((_data) => {
    res.render('page', {
      result: _data
    })
  })
})

module.exports = router