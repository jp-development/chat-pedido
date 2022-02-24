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

    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'User'
})


module.exports = User