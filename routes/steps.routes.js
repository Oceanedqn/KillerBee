const router = require('express').Router();
const stepsController = require('../controllers/steps.controller');
const { connection } = require("../models/db")


router.get('/', function (req, res) {
    res.send('all steps')
})


router.get('/view', stepsController.view);

router.put('/modify', function (req, res) {
    res.send('modify steps')
})

router.delete('/delete', function (req, res) {
    res.send('delete steps')
})

router.post('/create', stepsController.create);


module.exports = router;