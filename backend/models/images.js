const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    images: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
  
imageSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

imageSchema.set('toJSON', {
    virtuals:true
})

exports.Image = mongoose.model('Image', imageSchema);
exports.imageSchema = imageSchema