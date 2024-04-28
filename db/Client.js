const { Sequelize, DataTypes, Model } = require('sequelize');
const client = new Sequelize(
    'e_commerce',
     'postgres',
      'pass', 
{
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports=client