const router = require('express').Router();
const { getIdParam } = require('../utils/helpers.util');
const queryModel = require('../models/query.models');

// Show steps
router.get('/', async function (req, res) {
    await queryModel.queryData('STP_SHOW', '', req, res);
});

// Show steps by id
router.get('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req)
    }
    await queryModel.queryData('STP_SEARCH_ID', parameters, req, res);
});

// Create new step
router.post('/', async function (req, res) {
    const parameters = {
        "name": req.body.name
    }
    queryModel.queryData('STP_ADD', parameters, req, res);

});

// Modify existing step
router.put('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req),
        "name": req.body.name
    }
    queryModel.queryData('STP_CHANGE', parameters, req, res);
});

// Delete step
router.delete('/:id', async function (req, res) {
    const parameters = { "id": getIdParam(req) }
    queryModel.queryData('STP_DELETE', parameters, req, res);
});


module.exports = router;