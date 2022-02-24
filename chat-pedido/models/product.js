const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/db')
//Creacion de modelos para usuarios

class Product extends Model {
    
}

Product.init({
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
            notNull : true
        }
    },

    amount: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notNull: true
        }
    }

}, {
    sequelize,
    modelName: 'Product'
})


module.exports = Product