const express = require('express');
const router = express.Router();
const path = require('path');
const { connection } = require("../models/db");
const { QueryTypes } = require('sequelize');



// router.get('/', function (req, res) {

//     connection.query('select * from step', { model: Step }), function (err, query_res) {
//         if (err) res.statusCode(500).send(err);
//         res.json(query_res)
//     });
// connection.close();
// })


// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../src/views/index.html'));
// });

module.exports = router