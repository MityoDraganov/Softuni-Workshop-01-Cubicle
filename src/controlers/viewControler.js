const {readCubes} = require('./cubeControler')
const {readAccessories} = require('./accessoryControler')
const Cube = require('../models/cubeSchema')
const Accessory = require('../models/accessorySchema')

async function homeView(req,res){
    const {search, from, to} = req.query
    const cubes = await Cube.find().lean()

    console.log('cubes')
    console.log(cubes)

    /*
    if(search){
        cubes = cubes.filter(cube => cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    if(from){
        cubes = cubes.filter(cube => Number(cube.difficulty) >= Number(from))
    }

    if(to){
        cubes = cubes.filter(cube => Number(cube.difficulty) <= Number(to))
    }
    */



    res.render('index', {cubes})
}


async function createView(req,res){
    res.render('create')
}


async function aboutView (req,res){
    res.render('about')
}


async function notFound (req,res){
    res.render('404')
}


async function detailsView (req,res){
    const _id = req.params.id
    console.log('id')
    console.log(_id);
    //const cubes = await readCubes()
    //const cube = cubes.find(x => x._id == id).accessories
    const cube = await Cube.findById(_id).populate('accessories').lean()
    console.log('accesdsdsdsds')
    console.log(cube)
    if(!cube){
        res.render('404')
    } else{
    res.render('details', {cube})
    }
}

function createAccessoryView (req,res) {

    res.render('createAccessory')
}

async function attachAccessoryView (req,res) {
    
    
    const id = req.params.id
    //const cubes = await readCubes()
    //const cube = cubes.find(x => x._id == id)
    const cube = await Cube.findById(id).lean()
    console.log('abc cube')
    console.log(cube)
    const accesories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();
    console.log('myCube')
    console.log(cube)

    console.log('my accessories')
    console.log(accesories)


    res.render('attachAccessory', {cube, accesories})
}



module.exports = {detailsView, notFound, aboutView, createView, homeView, createAccessoryView, attachAccessoryView}