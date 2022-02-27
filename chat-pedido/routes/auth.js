var express = require('express');
const router = express.Router();
const User = require('../models/user')

//REGISTER USER

router.post('/register', async (req, res, next) => {
    try {
        const user = await User.create({
            cel: req.body.cel,
            name: req.body.name,
            surname: req.body.surname,
            secondSurname: req.body.secondsurname,
            identification : req.body.identification,
            password: req.body.password
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

//LOGIN USER 

router.post('/login', async (req, res, next) => {
    const user = await User.findOne({
        where: {
            identification: req.body.identification
        }
    })

    !user && res.status(404).json('User not found')

    res.status(200).json(user)
})

module.exports = router