const sequelize = require('../models/db');
const { checkErrorDB, setupParams } = require('../utils/helpers.util');


// Generic query to use the DB
async function queryData(query_name, parameters, req, res) {
    const test = await setupParams(parameters);
    await sequelize.query(`${query_name} ${test}`).then(function (response) {
        if (checkErrorDB(response)) {
            res.status(409).json({ message: 'This item is already create' })
        } else {
            res.status(201).json(response);
        }
    }).catch(function (err) {
        res.status(500).json(err);
    });
}

module.exports = { queryData };