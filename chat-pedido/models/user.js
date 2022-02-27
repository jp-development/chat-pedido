const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/db')
//Creacion de modelos para usuarios

class User extends Model {
    
}

User.init({
    cel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            notNull: true,
        }
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notNull: true
        }
    },

    surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notNull: true
        }
    },

    secondSurname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notNull: true
        }
    },

    identification : {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
            isAlpha: true,
            notNull: true
        }
    },

    password : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlphanumeric: true,
            notNull: true,
        }
    }
   

}, {
    sequelize,
    modelName: 'User'
})


module.exports = User