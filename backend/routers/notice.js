const { Notice } = require("../models/notice");
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
      cb(uploadError, "xyz/abc");
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname.split('').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
  });
const uploadOptions = multer({ storage: storage });



// const upload = multer({
//   storage: multer.diskStorage({
//       destination: function(req, file, cb){
//           cb(null, "xyz/abc")
//       },
//       filename: function(req, file, cb){
//           cb(null, file.filename + "-" + Date.now() + 'pdf')
//       }
//   })
// }).single('pdf')

router.get(`/`, async (req, res, next) => {
  const noticeList = await Notice.find();
  res.send(noticeList);
  if (!noticeList) {
    res.send(500).json({ sucess: false });
  }
});

router.get(`/:id`, async (req, res, next) => {
  const notice = await Notice.findById(req.params.id);

  if (!notice) {
    res
      .status(500)
      .json({ message: "the notice with the given id was not found." });
  }
  res.status(200).json(notice);
  next();
});





router.post(`/`, uploadOptions.single('pdf'), async (req, res) => {

  const file = req.file;
  const fileName = req.file.filename;
  console.log(fileName,'111')
  console.log(req.file,'1234')
  if (!file) return res.send({ message: "no file in the request" }).status(400);

  const basePath = `${req.protocol}://${req.get('host')}/xyz/abc/`

  const notes = new Notice({
      notice: req.body.notice,
      pdf: `${basePath}${fileName}`, // 'http://localhost:3000/public/uploads/image-2323232',
  })
  notes.save().then((creatednotice => {
      res.status(201).send({data: creatednotice, message: 'notice created successfully' })
  })).catch((err) => {
      res.status(500).json({
          error: err,
          sucess: false,
      })
  })
// }
})









router.put(`/:id`, uploadOptions.single('pdf'), async (req, res, next) => {
  const notice = await Notice.findById(req.params.id);
  if (!notice) return res.status(400).send("inValid notice!");

  const file = req.file;
  let docpath;
  if (file) {
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/xyz/abc/`;
    docpath = `${basePath}${fileName}`;
  } else {
    docpath = notice.doc;
  }
  const notices = await Notice.findByIdAndUpdate(
    req.params.id,
    {
      notice: req.body.notice,
      pdf: docpath,
    },
    { new: true }
  );
  if (!notices) return res.status(400).send("the notice cannot be added!");
  res.send({ notice: notice, message: "notice updated successfully" });
});


router.delete(`/:id`, (req, res) => {
  Notice.findByIdAndRemove(req.params.id)
    .then((notice) => {
      if (notice) {
        return res
          .status(200)
          .json({ sucess: true, message: "the notice is deleted!!" });
      } else {
        return res
          .status(404)
          .json({ sucess: false, message: "notice not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ sucess: false, error: err });
    });
});

module.exports = router;
