const { Download } = require("../models/downloads");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "application/pdf": "pdf",
};


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const isValid = FILE_TYPE_MAP[file.mimetype];
      let uploadError = new Error('Invalid file type');
  
      if (isValid) {
        uploadError = null;
      }
      cb(uploadError, "downloads/down");
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname.split('').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
  });
const uploadOptions = multer({ storage: storage });





router.get(`/`, async (req, res, next) => {
  const downloadList = await Download.find();
  res.send(downloadList);
  if (!downloadList) {
    res.send(500).json({ sucess: false });
  }
});

router.get(`/:id`, async (req, res, next) => {
  const download = await Download.findById(req.params.id);

  if (!download) {
    res
      .status(500)
      .json({ message: "the document with the given id was not found." });
  }
  res.status(200).json(download);
  next();
});





router.post(`/`, uploadOptions.single('pdf'), async (req, res) => {

  const file = req.file;
  const fileName = req.file.filename;
//   console.log(fileName,'111')
//   console.log(req.file,'1234')
  if (!file) return res.send({ message: "no file in the request" }).status(400);

  const basePath = `${req.protocol}://${req.get('host')}/downloads/down/`

  const downloads = new Download({
      downloads: req.body.downloads,
      pdf: `${basePath}${fileName}`, // 'http://localhost:3000/public/uploads/image-2323232',
  })
  downloads.save().then((createdDox => {
      res.status(201).send({data: createdDox, message: 'Document created successfully' })
  })).catch((err) => {
      res.status(500).json({
          error: err,
          sucess: false,
      })
  })
// }
})









router.put(`/:id`, uploadOptions.single('pdf'), async (req, res, next) => {
  const downloads = await Download.findById(req.params.id);
  if (!downloads) return res.status(400).send("inValid Doc!");

  const file = req.file;
  let docpath;
  if (file) {
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/downloads/down/`;
    docpath = `${basePath}${fileName}`;
  } else {
    docpath = downloads.pdf;
  }
  const download = await Download.findByIdAndUpdate(
    req.params.id,
    {
      downloads: req.body.downloads,
      pdf: docpath,
    },
    { new: true }
  );
  if (!download) return res.status(400).send("the document cannot be added!");
  res.send({ document: documents, message: "document updated successfully" });
});


router.delete(`/:id`, (req, res) => {
  Download.findByIdAndRemove(req.params.id)
    .then((notice) => {
      if (notice) {
        return res
          .status(200)
          .json({ sucess: true, message: "the document is deleted!!" });
      } else {
        return res
          .status(404)
          .json({ sucess: false, message: "document not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ sucess: false, error: err });
    });
});

module.exports = router;
