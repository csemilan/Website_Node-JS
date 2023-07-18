const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
  
albumSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

albumSchema.set('toJSON', {
    virtuals:true
})

exports.Album = mongoose.model('Album', albumSchema);
exports.albumSchema = albumSchema