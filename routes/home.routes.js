const express = require('express');
const router = express.Router();
const path = require('path');



// router.get('/', function (req, res) {
//     connection.connect();

//     connection.query('select * from step', function (err, query_res) {
//         if (err) res.statusCode(500).send(err);
//         res.json(query_res)
//     });
//     connection.end();
// })


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../pages/steps/index.html'));
});

module.exports = router