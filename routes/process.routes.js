const router = require('express').Router();
const { getIdParam, checkErrorDB } = require('../utils/helpers.util')
const sequelize = require('../models/db')


// Show process
router.get('/', async function (req, res) {
    sequelize.query('PRC_SHOW').then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });

});

// Show process by id
router.get('/:id', async function (req, res) {
    const id = getIdParam(req);
    sequelize.query(`PRC_SEARCH_ID @id=${id}`).then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });
});


// Create process
router.post('/', async function (req, res) {
    const name = req.body.name;
    const description = req.body.description;
    if (name == null && description == null) {
        return res.status(422).json({ message: 'le champs "name" n est pas spécifié' });
    }
    sequelize.query(`PRC_ADD @name=\'${name}\', @description=\'${description}\'`).then(function (response) {

        if (checkErrorDB(response)) return res.status(500).json({ message: 'This item is already create' })
        res.status(201).json({ message: 'Succcessfully cretaed' })
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

// Change process by id
router.put('/:id', async function (req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const id = getIdParam(req);
    sequelize.query(`PRC_CHANGE @id=${id},  @name=\'${name}\', @description=\'${description}\'`).then(function (response) {
        res.send('Successfully changed');
        res.status(200).json(response);
    }).catch(function (err) {
        res.json(err);
    });
});

// Delete process by id
router.delete('/:id', async function (req, res) {
    const id = getIdParam(req);
    sequelize.query(`PRC_DELETE @id=${id}`).then(function (response) {
        res.send("Successfully deleted");
    }).catch(function (err) {
        res.json(err);
    });
});

// IF PROCESS IS ALREADY CREATED
// Change currently process to add test
router.put('/:id/add_step', async function (req, res) {
    const id = getIdParam(req);
    const name = req.body.name;
    const test = req.body.test;
    const stepNumber = req.body.stepNumber;
    sequelize.query(`STP_CST_ADD @id_prc=${id}, @name_stp=\'${name}\', @test=\'${test}\', @stepNumber=${stepNumber}`).then(function (response) {
        res.send("Successfully created");
    }).catch(function (err) {
        res.json(err);
    });
})

// Change currently process to change currently test
router.put('/:id/change_test', async function (req, res) {
    const id = getIdParam(req);
    const id_stp = req.body.id_stp;
    const test = req.body.test;
    const stepNumber = req.body.stepNumber;
    sequelize.query(`STP_CST_CHANGE @id_prc=${id}, @id_stp=${id_stp}, @test=\'${test}\', @stepNumber=${stepNumber}`).then(function (response) {
        res.send("Successfully changed");
    }).catch(function (err) {
        res.json(err);
    });
})

// Change currently process to delete 
// Delete process by id
router.delete('/:id/delete_step', async function (req, res) {
    const id_prc = getIdParam(req);
    const id_stp = req.body.id_stp;
    sequelize.query(`STP_CST_DELETE @id_prc=${id_prc}, @id_stp=${id_stp}`).then(function (response) {
        res.send("Successfully deleted");
    }).catch(function (err) {
        res.json(err);
    });
});









module.exports = router;