const { Sequelize } = require('sequelize');
require('dotenv').config();

function connectToDB(config) {
    console.log(config)
    const sequelize = new Sequelize(process.env.DB_NAME, config.name, config.password, {
        host: process.env.DB_HOST,
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        logging: false
    });
    //Connection to DB
    sequelize.authenticate().then(() => {
        console.log('Connection established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    return sequelize
}





module.exports = { connectToDB }