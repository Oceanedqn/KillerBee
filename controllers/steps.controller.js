const StepsModel = require('../models/steps.model');


module.exports.create = async (req, res) => {
    const { name } = req.body;
    try {
        const step = await StepsModel.create({ name });
        res.status(201).json({ step: name._id });
    } catch (err) {
        res.status(200).send({ err });
    }
}

module.exports.view = async (req, res) => {
    try {
        const step = await StepsModel.view();
        res.status(201).json('nul');
    } catch (err) {
        res.status(200).send({ err });
    }
}