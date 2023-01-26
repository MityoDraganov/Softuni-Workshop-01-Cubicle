const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    _id: Number,
    imageURL: String,
    name: String,
    description: String,
    difficultyLevel: Number
})
const cubeModel = mongoose.model('cube', cubeSchema)
module.exports = cubeModel

