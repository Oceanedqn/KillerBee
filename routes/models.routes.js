const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    res.send('all models')
})

router.put('/', function (req, res) {
    res.send('modify models')
})

router.delete('/', function (req, res) {
    res.send('delete models')
})

router.post('/create', function (req, res) {
    res.send('create models')
})


module.exports = router