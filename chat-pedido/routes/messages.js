const express = require('express')
const router = express.Router()
const Message = require('../models/message')
const axios = require('axios')




router.get('/', async (req, res, next) => {
    try {
        const response = await Message.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post('/send', async (req, res, next) => {
    try {
        const response = await Message.create({
            sender: req.body.sender,
            text: req.body.text
        })
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json(error)
    }

})




module.exports = router