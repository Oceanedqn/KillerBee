const express = require('express');
const router = express.Router();
const { connectToDB } = require("../models/db");
const jwt = require('jsonwebtoken')

// Create ingredient
router.post('/', async function (req, res) {
    const config = {
        "name": req.body.name,
        "password": req.body.password
    }


    jwt.sign({ user: config }, "product", (err, token) => {
        res.json({
            token,
        });
    })
    await connectToDB(config);
});

router.post('/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, "product", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "post created",
                authData

            });

        }
    })

})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next();
    } else {
        res.sendStatus(403) //forbidden
    }
}

module.exports = router