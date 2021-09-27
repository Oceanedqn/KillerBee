const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    res.send('all process')
})

router.get('/view', function (req, res) {
    res.send('view process')
})

router.put('/modify', function (req, res) {
    res.send('modify process')
})

router.delete('/delete', function (req, res) {
    res.send('delete process')
})

router.post('/create', function (req, res) {
    res.send('create process')
})


module.exports = router