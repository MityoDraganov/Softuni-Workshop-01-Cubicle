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
    difficultyLevel: {
        type: Number, 
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'accessory'
    }]
})

const cubeModel = mongoose.model('cube', cubeSchema)
module.exports = cubeModel

