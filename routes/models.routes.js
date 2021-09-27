const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    res.send('all models')
})

router.get('/view', function (req, res) {
    res.send('view models')
})

router.put('/modify', function (req, res) {
    res.send('modify models')
})

router.delete('/delete', function (req, res) {
    res.send('delete models')
})

router.post('/create', function (req, res) {
    res.send('create models')
})


module.exports = router