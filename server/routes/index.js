const express = require("express")
const usersDb = require('../db/users')
const swordsDb = require('../db/swords')
const router = express.Router()

// USER - GET ROUTE
router.get("/user/:id", (req, res) => {
    usersDb.getUserById(req.params.id)
        .then((user) => res.json(user))
})


// SWORD - GET ROUTE
router.get("/", (req, res) => {
    swordsDb.getItemById(req.params.id)
    .then((sword) => res.json(sword))
})

// SWORD - POST ROUTE
router.post("/", (req, res) => {
    console.log(req.body)
    swordsDb.addSwords(req.body)
        .then((sword) => res.json(sword))
})

// SWORD - PATCH ROUTE
router.patch("/", (req, res) => {
    swordsDb.update(req.params.id, req.body)
        .then((sword) => res.json(sword))
})

// SWORD - DELETE ROUTE
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    swordsDb.deleteSword(id)
        .then((scrap) => res.json(scrap))
})

module.exports = router