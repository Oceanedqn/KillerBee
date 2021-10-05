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

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
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


module.exports = { connectToDB, sequelize }