
const sequelize = require('../models/db')

//Show Logs from DB (not working)
async function showLogs(req, res) {
    sequelize.query('IGD_SHOW').then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });
}

//Insert Logs into DB (not working)
async function putLogs(req, res) {
    const message = req.body.message;
    const status = req.body.status;

    sequelize.query(`LOG_ADD @message=\'${message}\', @status=\'${status}\'`).then(function (response) {
        res.send('Succcessfully cretaed');
        res.status(201).json(response);
    }).catch(function (err) {
        res.status(500).json(err);
    });

}

module.exports = { showLogs, putLogs };

