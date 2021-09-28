const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Ingredient', {
        IGD_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        IGD_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        IGD_description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,

        });
};