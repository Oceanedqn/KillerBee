const router = require('express').Router();
const queryModel = require('../models/query.models');


// Show collections
router.get('/', async function (req, res) {
    await queryModel.queryData('CLT_SHOW', '', req, res);
});


module.exports = router