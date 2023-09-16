const { Gallery } = require("../models/gallery");
const express = require("express");
const router = express.Router();
const { Album } = require("../models/album");
const mongoose = require("mongoose");
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function(req, file, cb){
//             cb(null, "pu/up")
//         },
//         filename: function(req, file, cb){
//             const extension = FILE_TYPE_MAP[file.mimetype];
//             cb(null, file.filename + "-" + Date.now() + `.${extension}`)
//         }
//     })
// })

const store = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("inValid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "pu/up");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split("").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});
const upload = multer({ storage: store });



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("Invalid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split("").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});
const uploadOptions = multer({ storage: storage });



router.get(`/`, async (req, res) => {
  // http://localhost:3000/api/v1/products?categories=2356487,354275885

  let filter = {};
  if (req.query.album) {
    filter = { album: req.query.album.split(",") };
  }
  const galleryList = await Gallery.find(filter).populate("album");
  res.send(galleryList);
  if (!galleryList) {
    res.status(500).json({ sucess: false });
  }
});

router.get("/:id", async (req, res) => {
  const gallery = await Gallery.findById(req.params.id).populate("album").populate({path:'album'});

  if (!gallery) {
    res.status(500).json({ sucess: false });
  }
  res.send(gallery);
});




router.post(`/`, uploadOptions.single("image"), async (req, res) => {
  let galleryExist = await Gallery.findOne({ desc: req.body.desc });
  if (galleryExist) {
    res.send({ message: "gallery is already Existed" });
  } else {
    const file = req.file;
    if (!file)
      return res.send({ message: "no image in the request" }).status(400);

    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

    const gallery = new Gallery({
      desc: req.body.desc,
      album: req.body.album,
      image: `${basePath}${fileName}`, // 'http://localhost:3000/public/uploads/image-2323232',
      images: `${basePath}${fileName}`,
    });

    gallery
      .save()
      .then((createdgallery) => {
        res
          .status(201)
          .send({
            data: createdgallery,
            message: "gallery created successfully",
          });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          sucess: false,
        });
      });
  }
});




// router.post(
//   '/gallery-images/:galleryId',
//   upload.array('images', 10),
//   async (req, res) => {
//       if (!mongoose.isValidObjectId(req.params.galleryId)) {
//           res.status(404).send("invalid gallery Id!")
//       }

//       const file = req.files
//       console.log(file)
//       let imagesPaths = [];
//       const basePath = `${req.protocol}://${req.get('host')}/pu/up/`;

//       if (file) {
//           file.map(file => {
//           imagesPaths.push(`${basePath}${file.filename}`);
//           })
//       }
//       const galleryId = req.params.galleryId;
//       const gallery = await Gallery.findById(galleryId)

//   if (!gallery) {
//     return res.status(500).send("the gallery cannot be updated!")
//   }
  
//       // Add the image URL to the images array
//       gallery.images.push(imagesPaths);

//       // Save the updated gallery
//       await gallery.save();
//   res.send(gallery)
//   }
// )


router.post(
  "/gallery-images/:galleryId",
  upload.single("images"),
  async (req, res) => {
    try {
      const file = req.file;
      console.log(file,'222')
      if (!file)
        return res.status(400).json({ message: "No image in the request" });

      const fileName = req.file.filename;
      const basePath = `${req.protocol}://${req.get("host")}/pu/up/`;
      const imageUrl = `${basePath}${fileName}`;

      const galleryId = req.params.galleryId;
      console.log(imageUrl, '1234')
      // Find the gallery by ID
      const gallery = await Gallery.findById(galleryId);

      if (!gallery) {
        return res.status(404).json({ error: "Gallery not found" });
      }

      // Add the image URL to the images array
      gallery.images.push(imageUrl);

      // Save the updated gallery
      await gallery.save();

      res.json({ data: gallery, message: "Image added successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  }
);








router.put("/:id", uploadOptions.single("image"), async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(404).send("invalid gallery Id!");
  }
  const album = await Album.findById(req.body.album);
  if (!album) return res.status(400).send({ message: "invalid album" });

  const file = req.file;
  let imagepath;
  if (file) {
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    imagepath = `${basePath}${fileName}`;
  }

  const updatedGallery = await Gallery.findByIdAndUpdate(
    req.params.id,
    {
      desc: req.body.desc,
      image: imagepath,
      album: req.body.album,
    },
    { new: true }
  );
  if (!updatedGallery)
    return res.status(500).send({ message: "the gallery cannot be updated!" });
  res.send({ message: "Gallery updated successfully" });
});

router.delete("/:id", (req, res) => {
  Gallery.findByIdAndRemove(req.params.id)
    .then((gallery) => {
      if (gallery) {
        return res
          .status(200)
          .json({ sucess: true, message: "the gallery is deleted!" });
      } else {
        return res
          .status(404)
          .json({ sucess: false, message: "the gallery is not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ sucess: false, error: err });
    });
});

module.exports = router;
