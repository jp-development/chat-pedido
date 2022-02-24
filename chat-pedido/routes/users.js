var express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(401).json('Este usuario no existe')
    }
    
})

module.exports = router