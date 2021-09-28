const router = require('express').Router();
const { getIdParam, checkErrorDB } = require('../utils/helpers.util')
const sequelize = require('../models/db')



router.get('/', async function (req, res) {
    sequelize.query('STP_SHOW').then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });

});

router.get('/:id', async function (req, res) {
    const id = getIdParam(req);
    sequelize.query(`STP_SEARCH_ID @id=${id}`).then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });
});


router.post('/', async function (req, res) {
    const name = req.body.name;
    if (name == null) {
        return res.status(422).json({ message: 'le champs "name" n est pas spécifié' });
    }
    sequelize.query(`STP_ADD @name=\'${name}\'`).then(function (response) {
        if (checkErrorDB(response)) return res.status(500).json({ message: 'This item is already create' })
        res.status(201).json({ message: 'Succcessfully cretaed' })
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

router.put('/:id', async function (req, res) {
    const name = req.body.name;
    const id = getIdParam(req);
    sequelize.query(`STP_CHANGE @id=${id}  @name=\'${name}\'`).then(function (response) {
        res.status(200).json(response);
    }).catch(function (err) {
        res.json(err);
    });
});

router.delete('/:id', async function (req, res) {
    const id = getIdParam(req);
    sequelize.query(`STP_DELETE @id=${id}`).then(function (response) {
        res.send("deleted");
    }).catch(function (err) {
        res.json(err);
    });
});


module.exports = router;