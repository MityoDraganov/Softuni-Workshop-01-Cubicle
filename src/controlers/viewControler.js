const db = require('../db.json')
exports.homeView = (req,res) =>{
    const {search, from, to} = req.query
    let cubes = db.cubes

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

exports.createView = (req,res) =>{
    res.render('create')
}

exports.aboutView = (req,res) =>{
    res.render('about')
}

exports.notFound = (req,res) =>{
    res.render('404')
}
exports.detailsView = (req,res) =>{
    const id = req.params.id
    const cube = db.cubes.find(x => x.id == id)
    
    res.render('details', {cube})
}