const express = require('express')
const router = express.Router()
const page = require('../data/page')

router.get('/', (req, res) => {
  page.getBoth('meat', 'vegetables').then((_data) => {
    res.render('page', {
      count1: _data[0],
      count2: _data[1]
    })
  })
})

module.exports = router