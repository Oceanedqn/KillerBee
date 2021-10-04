const router = require('express').Router();
const { getIdParam } = require('../utils/helpers.util');
const queryModel = require('../models/query.models');

// Show ingredients
router.get('/', async function (req, res) {
    await queryModel.queryData('IGD_SHOW', undefined, req, res);
});

// Show ingredients by id
router.get('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req)
    }
    await queryModel.queryData('IGD_SEARCH_ID', parameters, req, res);
});

// Create ingredient
router.post('/', async function (req, res) {
    const parameters = {
        "name": req.body.name,
        "description": req.body.description
    }
    await queryModel.queryData('IGD_ADD', parameters, req, res);
});

// Modify existing ingredient
router.put('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req),
        "name": req.body.name,
        "description": req.body.description
    }
    queryModel.queryData('IGD_CHANGE', parameters, req, res);


});

// Delete ingredient
router.delete('/:id', async function (req, res) {
    const parameters = { "id": getIdParam(req) }
    queryModel.queryData('IGD_DELETE', parameters, req, res);
});




module.exports = router;