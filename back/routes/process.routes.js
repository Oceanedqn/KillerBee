const router = require('express').Router();
const { getIdParam } = require('../utils/helpers.util');
const queryModel = require('../models/query.models');


// Show process
router.get('/', async function (req, res) {
    queryModel.queryData('PRC_SHOW', undefined, req, res);
});

// Show process by id
router.get('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req)
    }
    queryModel.queryData('PRC_SEARCH_ID', parameters, req, res);
});


// Create process
router.post('/', async function (req, res) {
    const parameters = {
        "name": req.body.name,
        "description": req.body.description
    }
    queryModel.queryData('PRC_ADD', parameters, req, res);
});

// Change process by id
router.put('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req),
        "name": req.body.name,
        "description": req.body.description
    }
    queryModel.queryData('PRC_CHANGE', parameters, req, res);
});

// Delete process by id
router.delete('/:id', async function (req, res) {
    const parameters = { "id": getIdParam(req) }
    queryModel.queryData('PRC_DELETE', parameters, req, res);
});

// IF PROCESS IS ALREADY CREATED
// Change currently process to add test
router.put('/:id/add_step', async function (req, res) {
    const parameters = {
        "id": getIdParam(req),
        "name": req.body.name,
        "test": req.body.test,
        "stepNumber": req.body.stepNumber
    }
    queryModel.queryData('STP_CST_ADD', parameters, req, res);
})

// Change currently process to change currently test
router.put('/:id/change_test', async function (req, res) {
    const parameters = {
        "id": getIdParam(req),
        "id_stp": req.body.id_stp,
        "test": req.body.test,
        "stepNumber": req.body.stepNumber
    }
    queryModel.queryData('STP_CST_CHANGE', parameters, req, res);
})

// Change currently process to delete 
// Delete process by id
router.delete('/:id/delete_step', async function (req, res) {
    const parameters = {
        "id_prc": getIdParam(req),
        "id_stp": req.body.id_stp
    }
    queryModel.queryData('STP_CST_DELETE', parameters, req, res);
});









module.exports = router;