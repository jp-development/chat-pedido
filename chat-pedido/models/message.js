const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/db')

class Message extends Model {

}

Message.init({
    sender: {
        type: DataTypes.STRING,
        allowNull :false,
        validate: {
            isNumeric: true,
            notNull: true
        }
    },
    text: {
        type: DataTypes.TEXT,
        allowNull:false,
        validate: {
            notNull:true
        }
    }

}, {
    sequelize,
    modelName: 'Message'
})

module.exports = Message