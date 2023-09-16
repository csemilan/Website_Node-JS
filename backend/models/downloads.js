const mongoose = require('mongoose');

const downloadSchema = new mongoose.Schema({
    downloads: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    pdf: {
        type: String,
    }
})
  
downloadSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

downloadSchema.set('toJSON', {
    virtuals:true
})

exports.Download = mongoose.model('Download', downloadSchema);
exports.downloadSchema = downloadSchema