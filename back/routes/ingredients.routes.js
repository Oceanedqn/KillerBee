const router = require('express').Router();
const { getIdParam } = require('../utils/helpers.util');
const queryModel = require('../models/query.models');


router.get('/', async function (req, res) {
    await queryModel.queryData('IGD_SHOW', undefined, req, res);
});

router.get('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req)
    }
    await queryModel.queryData('IGD_SEARCH_ID', parameters, req, res);
});

router.post('/', async function (req, res) {
    const parameters = {
        "name": req.body.name,
        "description": req.body.description
    }
    await queryModel.queryData('IGD_ADD', parameters, req, res);
});


router.put('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req),
        "name": req.body.name,
        "description": req.body.description
    }
    queryModel.queryData('IGD_CHANGE', parameters, req, res);


});

router.delete('/:id', async function (req, res) {
    const parameters = { "id": getIdParam(req) }
    queryModel.queryData('IGD_DELETE', parameters, req, res);
});




module.exports = router;