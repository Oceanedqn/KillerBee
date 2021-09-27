const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    res.send('all ingredients')
})

router.get('/view', function (req, res) {
    res.send('view ingredients')
})

router.put('/modify', function (req, res) {
    res.send('modify ingredients')
})

router.delete('/delete', function (req, res) {
    res.send('delete ingredients')
})

router.post('/create', function (req, res) {
    res.send('create ingredient')
})

module.exports = router