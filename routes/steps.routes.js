const router = require('express').Router();
const { models } = require("../models/db");
const { getIdParam } = require('../utils/helpers.util')


router.get('/', async function (req, res) {
    res.status(200).json(await models.Step.findAll());
})

router.get('/:id', async function (req, res) {
    const id = getIdParam(req);
    res.status(200).json(await models.Step.findByPk(id));
})

router.post('/', async function (req, res) {
    const name = req.body.name
    if (name != null) {
        await models.Step.create({
            STP_name: name,
        });
        return res.status(201).end()
    }
    return res.status(422).json({ message: 'le champs "name" n est pas spécifié' });
})



module.exports = router;