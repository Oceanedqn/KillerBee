module.exports = (sequelize, type) => {
    return sequelize.define('step', {
        name: type.STRING
    })
};

