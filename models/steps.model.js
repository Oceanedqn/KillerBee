const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Step', {
        STP_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        STP_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {

            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false,

            // If don't want createdAt
            createdAt: false,

            // If don't want updatedAt
            updatedAt: false,

            // your other configuration here

        });
};
