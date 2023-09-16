const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



router.post(`/register`, async (req, res) => {
   
    let user = await User.findOne({email: req.body.email})
    if(user){
        res.send({message: "user is already registered"})
    } else {
        let users = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone
        })
        users = await users.save();
        if (!users) {
            return res.status(400).send({message :"the user cannot be registered"})
        }
        res.send(users, {message: "Registered successfully"})
    }
})



router.post(`/login`, async (req, res) => {
    let users = await User.findOne({ email: req.body.email });
    const secret = process.env.secret;
    if (!users) {
        return res.status(400).send("the user not found")
    }
    if (users && bcrypt.compareSync(req.body.password, users.passwordHash)) {
        const token = jwt.sign(
            {
                userId: users.id,
                isAdmin: users.isAdmin
            },
            secret,
            { expiresIn: '1w' }
        )
        res.status(200).send({user: users.email, token: token, message: "login successfully"});
    } else {
        res.status(400).send({message:"password is wrong"});
    }

})



module.exports = router;