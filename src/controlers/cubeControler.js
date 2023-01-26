const Cube = require('../models/cube')
const db = require('../db.json')
const mongoose = require('mongoose')


const cubeModel = require('../models/cubeSchema')



function postCube(req,res){
    const {name, description, imageUrl, difficultyLevel} = req.body


    const cube = new cubeModel({
        name,
        description,
        imageUrl,
        difficultyLevel
    })

    cube.save(function(err){
        if(err){
            console.log(err)
        }
    })

    //const cube = new Cube(name, description, imageUrl, difficultyLevel)
    //cube.save()
    res.redirect('/')
}

async function readCubes(){
    const cubes = await cubeModel.find()
    console.log(cubes)
}
readCubes()
module.exports = {readCubes, postCube}