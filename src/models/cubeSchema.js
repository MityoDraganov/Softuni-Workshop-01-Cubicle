const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    //id: Number,
    name: String,
    description: String,
    imageURL: String,
    difficultyLevel: Number
})
const cubeModel = mongoose.model('cube', cubeSchema)
module.exports = cubeModel

