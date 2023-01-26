const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    imageURL: String,
    difficultyLevel: Number
})
const cubeModel = mongoose.model('cube', cubeSchema)
module.exports = cubeModel

