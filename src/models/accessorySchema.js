const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    _id: Number,
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
    cubes: {

    }
})
const accessoryModel = mongoose.model('accessory', cubeSchema)
module.exports = accessoryModel

