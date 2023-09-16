const { Album } = require("../models/album");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/`, async (req, res, next) => {
    const albumList = await Album.find();
    res.send(albumList);
    if (!albumList) {
        res.send(500).json({ sucess: false });
    }
    // res.status(200).send(categoryList);
    // next.send(categoryList);
});



router.get(`/:id`, async (req, res, next) => {
    const album = await Album.findById(req.params.id);

    if (!album) {
        res.status(500).json({ message: "the album with the given id was not found." })
    }
    res.status(200).json(album);
    next();
})


router.post(`/`, async (req, res, next) => {
    let albumExist = await Album.findOne({name: req.body.name})
    if(albumExist){
        res.send({message: "album is already Existed"})
    } else {
        const album = new Album({
            name: req.body.name,
            date: req.body.date
        })
        album.save().then((createdalbum => {
            res.status(201).send({ message: 'album created successfully' })
        })).catch((err) => {
            res.status(500).json({
                error: err,
                sucess: false,
            })
        })
    }
})



router.put(`/:id`, async (req, res, next) => {
    const album = await Album.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            date: req.body.date
        },
        { new: true },
    
   )
    if (!album)
        return res.status(400).send("the album cannot be created!")
    res.send({album: album, message: 'album updated successfully'})
})



router.delete(`/:id`, (req, res) => {
    Album.findByIdAndRemove(req.params.id).then(album => {
        if (album) {
            return res.status(200).json({ sucess: true, message: "the album is deleted!!" })
        } else {
            return res.status(404).json({ sucess: false, message: "album not found" })
        }
    }).catch(err => {
        return res.status(400).json({ sucess: false, error: err })
    })
})



module.exports = router;
