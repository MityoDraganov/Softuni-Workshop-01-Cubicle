const Cube = require('../models/cube')
const db = require('../db.json')

exports.postCube = (req,res) =>{
    const {name, description, imageUrl, difficultyLevel} = req.body

    const cube = new Cube(name, description, imageUrl, difficultyLevel)
    cube.save()
    res.redirect('/')
}