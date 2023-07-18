const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
  
facultySchema.virtual("id").get(function () {
    return this._id.toHexString();
});

facultySchema.set('toJSON', {
    virtuals:true
})

exports.Faculty = mongoose.model('Faculty', facultySchema);
exports.facultySchema = facultySchema