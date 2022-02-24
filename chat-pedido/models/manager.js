const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/db')
//Creacion de modelos para usuarios

class Manager extends Model {
    
}

Manager.init({
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
    modelName: 'Manager'
})


module.exports = Manager