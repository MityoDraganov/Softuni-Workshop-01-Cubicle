const {readCubes} = require('./cubeControler')
const {readAccessories} = require('./accessoryControler')

async function homeView(req,res){
    const {search, from, to} = req.query
    const cubes = await readCubes()

    console.log('cubes')
    console.log(cubes)


    if(search){
        cubes = cubes.filter(cube => cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    if(from){
        cubes = cubes.filter(cube => Number(cube.difficulty) >= Number(from))
    }

    if(to){
        cubes = cubes.filter(cube => Number(cube.difficulty) <= Number(to))
    }




    res.render('index', {cubes, search})
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
    const id = req.params.id
    console.log('id')
    console.log(id);
    const cubes = await readCubes()
    const cube = cubes.find(x => x._id == id)
    if(!cube){
        res.render('404')
    }
    res.render('details', {cube})
}

function createAccessoryView (req,res) {

    res.render('createAccessory')
}

async function attachAccessoryView (req,res) {
    
    
    const id = req.params.id
    const cubes = await readCubes()
    const cube = cubes.find(x => x._id == id)


    const accesories = await readAccessories()
    console.log('myCube')
    console.log(cube)

    console.log('my accessories')
    console.log(accesories)


    res.render('attachAccessory', {cube, accesories})
}



module.exports = {detailsView, notFound, aboutView, createView, homeView, createAccessoryView, attachAccessoryView}