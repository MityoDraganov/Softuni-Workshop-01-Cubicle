//const Cube = require('../models/cube')
//const db = require('../db.json')
//const mongoose = require('mongoose')


const cubeModel = require('../models/cubeSchema')



async function postCube(req,res){
    const {name, description, imageUrl, difficultyLevel} = req.body
    const cubes = await cubeModel.find().lean()
    //console.log('url')
    //console.log(imageUrl)
    
    const _id = cubes[cubes.length -1]._id + 1

    const cube = new cubeModel({
        "_id": _id,
        "name": name,
        "description": description,
        "imageURL": imageUrl,
        "difficultyLevel": difficultyLevel,
        "accessories": [],
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
    const cubes = await cubeModel.find().lean()
    //console.log(cubes)
    return cubes
}

async function addAccessoryToCube(req,res){
    console.log('posted')
    const accessory = req.body.accessory

    const id = req.params.id
   // const cubes = await cubeModel.find().lean()
    const cube = await cubeModel.findById(Number(id))
    cube.accessories.push(accessory)
    await cube.save()
    //const cubeAccessories = cube.$clone().accessories
    //cubeAccessories.push(accessory)
    //console.log(cubeAccessories)
    //cube.accessories.push(accessory)
    //cube.save()
    //cube.updateOne({ _id: id}, { $push: {accessories: accessory}})
    //res.redirect('/')
}

module.exports = {readCubes, postCube, readCubes, addAccessoryToCube}