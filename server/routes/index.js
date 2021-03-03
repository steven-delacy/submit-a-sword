const express = require("express")
const usersDb = require('../db/users')
const swordsDb = require('../db/swords')
const router = express.Router()

// USER - GET ROUTE
router.get("/user/:id", (req,res) => {
    usersDb.getUserById(req.params.id)
        .then((user) => res.json(user))
})


// SCRAP - GET ROUTE
router.get("/", (req, res) => {
    swordsDb
})