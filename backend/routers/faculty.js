const { Faculty } = require("../models/faculty");
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
    let uploadError = new Error("Invalid file type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "faculty/fac");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split("").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});
const uploadOptions = multer({ storage: storage });

router.get(`/`, async (req, res, next) => {
  const facultyList = await Faculty.find();
  res.send(facultyList);
  if (!facultyList) {
    res.send(500).json({ sucess: false });
  }
  // res.status(200).send(categoryList);
  // next.send(categoryList);
});

router.get(`/:id`, async (req, res, next) => {
  const faculty = await Faculty.findById(req.params.id);

  if (!faculty) {
    res
      .status(500)
      .json({ message: "the faculty with the given id was not found." });
  }
  res.status(200).json(faculty);
  next();
});



router.post(`/`, uploadOptions.single('image'), async (req, res, next) => {
  let facultyExist = await Faculty.findOne({ email: req.body.email });
  if (facultyExist) {
    res.send({ message: "faculty is already Existed" });
  } else {
    const file = req.file;
    if (!file)
      return res.send({ message: "no file in the request" }).status(400);
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/faculty/fac/`;

    const faculty = new Faculty({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      qualification: req.body.qualification,
      designation: req.body.designation,
      experience: req.body.experience,
      image: `${basePath}${fileName}`
    });
    faculty
      .save()
      .then((createdfaculty) => {
        res.status(201).send({ message: "faculty created successfully" });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          sucess: false,
        });
      });
  }
});



router.put("/:id", uploadOptions.single("image"), async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(404).send("invalid faculty Id!");
  }
  const faculty = await Faculty.findById(req.params.id);
  if (!faculty) return res.status(400).send({ message: "invalid faculty" });

  const file = req.file;
  let imagepath;
  if (file) {
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/faculty/fac/`;
    imagepath = `${basePath}${fileName}`;
  }

  const updatedFaculty = await Faculty.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      qualification: req.body.qualification,
      designation: req.body.designation,
      experience: req.body.experience,
      image: imagepath,
    },
    { new: true }
  );
  if (!updatedFaculty)
    return res.status(500).send({ message: "the faculty cannot be updated!" });
  res.send({ message: "faculty updated successfully" });
});



router.delete(`/:id`, (req, res) => {
  Faculty.findByIdAndRemove(req.params.id)
    .then((faculty) => {
      if (faculty) {
        return res
          .status(200)
          .json({ sucess: true, message: "the faculty is deleted!!" });
      } else {
        return res
          .status(404)
          .json({ sucess: false, message: "faculty not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ sucess: false, error: err });
    });
});

module.exports = router;
