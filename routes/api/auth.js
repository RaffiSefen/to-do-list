const express = require('express');
const User = require('../../model/User');
const bcrypt = require("bcrypt")

const router = express.Router()


router.get("/users", async (req, res) => {
    const allFoundedUser = await User.find()
    res.send(allFoundedUser)
})


router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body
    const foundedUser = await User.findOne({ email })
    if (foundedUser) {
        res.send("Sorry dude, this email has already been taken")
    } else {
        const newUser = new User({
            username,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        newUser.password = hashPassword
        await newUser.save()
        res.send(newUser)
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const foundedUser = await User.findOne({ email })
    if (foundedUser) {
        const matched = await bcrypt.compare(password, foundedUser.password)
        console.log('matched', matched)
        if (matched) {
            res.send("You are now logged in")
        } else {
            res.send("Sorry dude, this password is not correct")
        }
    } else {
        res.send("Sorry dude, this email or password is not correct")
    }
})

module.exports = router
