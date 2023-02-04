const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    imageURL: {
        type: String, 
        required: true,
    },
    name: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
        maxlength: 200,
    },

})
const accessoryModel = mongoose.model('accessory', cubeSchema)
module.exports = accessoryModel

