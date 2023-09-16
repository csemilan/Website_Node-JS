const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    notice: {
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
  
noticeSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

noticeSchema.set('toJSON', {
    virtuals:true
})

exports.Notice = mongoose.model('Notice', noticeSchema);
exports.noticeSchema = noticeSchema