const {readCubes} = require('./cubeControler')

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
    const cubes = await readCubes()
    const cube = cubes.find(x => x.id == id)
    
    res.render('details', {cube})
}



module.exports = {detailsView, notFound, aboutView, createView, homeView}