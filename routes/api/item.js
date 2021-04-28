const express = require('express');
const authMiddleware = require('../../middlewares/auth');
const Item = require('../../model/Item');
const router = express.Router()



router.get("/all/items", authMiddleware, async (req, res) => {
    let allFoundedItems = await Item.find()
    res.send(allFoundedItems)
})

router.get("/item/:id", async (req, res) => {
    let foundedItem = await Item.findById(req.params.id)
    if (foundedItem) {
        res.send(foundedItem)
    } else {
        res.status(404).send("Item not found")
    }
})

router.post("/new/item", async (req, res) => {
    try {
        console.log(req.body)
        const { name, time, status } = req.body
        let newItem = new Item({
            name,
            time,
            status
        })
        await newItem.save()
        res.send(newItem)
    } catch (error) {
        console.log('Erorr', error.message)
    }
})

router.put("/update/item/:id", async (req, res) => {
    console.log(req.body)
    let foundedItem = await Item.findById(req.params.id)
    if (foundedItem) {
        let updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(updatedItem)
    } else {
        res.status(404).send("Item not found")
    }
})

router.delete("/delete/item/:id", async (req, res) => {
    let foundedItem = await Item.findById(req.params.id)
    if (foundedItem) {
        let deletedItem = await Item.deleteOne(foundedItem)
        res.send("Item deleted")
    } else {
        res.status(404).send("Item not found")
    }
})

module.exports = router
