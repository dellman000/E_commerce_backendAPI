const { Sequelize, DataTypes, Model } = require('sequelize');
const client = require('../db/Client');

class Category extends Model{

}

Category.init(
    {
        Category_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        category_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize:client,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
)

module.exports=Category;