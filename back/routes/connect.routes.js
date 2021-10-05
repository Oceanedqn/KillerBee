const express = require('express');
const router = express.Router();
const { connectToDB } = require("../models/db");
const jwt = require('jsonwebtoken')

// Create ingredient
router.post('/', async function (req, res) {
    // const config = {
    //     "name": req.body.name,
    //     "password": req.body.password
    // }
    const config = {
        "name": "product",
        "password": "Bdd2021Prod@"
    }

    jwt.sign({ user: config }, "secretary", (err, token) => {
        res.json({
            token,
        });
    })
    await connectToDB(config);
});

// router.post('/posts', verifyToken, (req, res) => {
//     jwt0verify(req.token, 'connect', (err, authData) => {
//         if (err) {
//             res.sendStatus(403)//forbiden
//         } else {
//             res.json({
//                 message: "Posts ok",
//                 authData
//             })
//         }
//     })

// })

router.post('/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, "secretary", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "post created",
                authData
            });

        }
    })


    res.json({
        message: "Posts ok"
    })

})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerToken.split(' ')[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403) //forbidden
    }
}

module.exports = router