const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    images: [{
        type: String,
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
  
gallerySchema.virtual("id").get(function () {
    return this._id.toHexString();
});

gallerySchema.set('toJSON', {
    virtuals:true
})

exports.Gallery = mongoose.model('Gallery', gallerySchema);
exports.gallerySchema = gallerySchema