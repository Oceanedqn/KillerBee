const router = require('express').Router();
const { models } = require("../models/db");
const { getIdParam } = require('../utils/helpers.util')
const sequelize = require('../models/db')


router.get('/', async function (req, res) {
    sequelize.query('CALL IGD_SHOW();').then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });

});

router.get('/:id', async function (req, res) {
    const id = getIdParam(req);
    sequelize.query('CALL IGD_SEARCH_ID(:id)', { replacements: { id: id } }).then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });
});

router.post('/', async function (req, res) {
    const name = req.body.name;
    const description = req.body.description;
    if (name != null && description != null) {
        await models.Ingredient.create({
            IGD_name: name,
            IGD_description: description
        });
        return res.status(201).end()
    }
    return res.status(422).json({ message: 'le champs "name" n est pas spécifié' });
});

router.put('/', async function (req, res) {

})

module.exports = router;