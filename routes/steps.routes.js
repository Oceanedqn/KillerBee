const router = require('express').Router();
const stepsController = require('../controllers/steps.controller');
const { connection } = require("../models/db");


// router.get('/', function (req, res) {
//     res.send('all steps')
// })

router.get('/', function (req, res) {
    // connection.connect();

    // connection.query('select * from step', function (err, query_res) {
    //     if (err) res.statusCode(500).send(err);
    //     res.json(query_res)
    // });
    // connection.end();
    console.log(connection);
})

// router.get('/view', stepsController.view);

// router.put('/modify', function (req, res) {
//     res.send('modify steps')
// })

// router.delete('/delete', function (req, res) {
//     res.send('delete steps')
// })

// router.post('/create', stepsController.create);


module.exports = router;