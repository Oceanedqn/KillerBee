const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    res.send('all collections')
})

router.get('/view', function (req, res) {
    res.send('view collections')
})

router.put('/modify', function (req, res) {
    res.send('modify collections')
})

router.delete('/delete', function (req, res) {
    res.send('delete collections')
})

router.post('/create', function (req, res) {
    res.send('create collections')
})


module.exports = router