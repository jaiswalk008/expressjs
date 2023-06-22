//sequelize uses mysql
const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete','root','karan123',
{dialect:'mysql',
host:'localhost',//chooses localhost by default
});
//creates a connection pool automatically and connects to the database
module.exports = sequelize;