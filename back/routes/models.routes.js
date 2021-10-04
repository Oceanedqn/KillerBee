const router = require('express').Router();
const { getIdParam } = require('../utils/helpers.util');
const queryModel = require('../models/query.models');


// Show model
router.get('/', async function (req, res) {
    queryModel.queryData('MDL_SHOW', '', req, res);
});

// Create model
router.post('/', async function (req, res) {
    const parameters = {
        "name_mdl": req.body.name_mdl,
        "description": req.body.description,
        "price": req.body.price,
        "id_clt": req.body.id_clt,
        "id_prc": req.body.id_prc
    }
    queryModel.queryData('MDL_ADD', parameters, req, res);
});

// Change model by id
router.put('/:id', async function (req, res) {
    const parameters = {
        "id": getIdParam(req),
        "name_mdl": req.body.name_mdl,
        "description": req.body.description,
        "price": req.body.price,
        "id_clt": req.body.id_clt,
        "id_prc": req.body.id_prc
    }
    queryModel.queryData('MDL_CHANGE', parameters, req, res);
});

// Delete modell by id
router.delete('/:id', async function (req, res) {
    const parameters = { "id": getIdParam(req) }
    queryModel.queryData('MDL_DELETE', parameters, req, res);
});

// IF MODEL IS ALREADY CREATED
// Change currently model to add ingredients with prices
router.put('/:id/add_ingredient', async function (req, res) {
    const parameters = {
        "id_mdl": req.body.id_mdl,
        "name_igd": req.body.name_igd,
        "weight": req.body.weight,
        "description": req.body.description
    }
    queryModel.queryData('IGD_USE_ADD', parameters, req, res);

})

// Change currently model to change currently test
router.put('/:id/change_weight', async function (req, res) {
    const parameters = {
        "id_igd": req.body.id_igd,
        "id_mdl": req.body.id_mdl,
        "weight": req.body.weight,
    }
    queryModel.queryData('IGD_USE_CHANGE', parameters, req, res);
})

// Change currently model to delete 
// Delete model by id
router.delete('/:id/delete_ingredient', async function (req, res) {
    const parameters = {
        "id_mdl": req.body.id_mdl,
        "id_igd": req.body.id_igd
    }
    queryModel.queryData('IGD_USE_DELETE', parameters, req, res);
});
module.exports = router;