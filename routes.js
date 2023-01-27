const Router = require('express').Router()
const viewControler = require('./src/controlers/viewControler')
const cubeControler = require('./src/controlers/cubeControler')
const accessoryControler = require('./src/controlers/accessoryControler')

//VIEWS
Router.get('/', viewControler.homeView)
Router.get('/create', viewControler.createView)
Router.get('/about', viewControler.aboutView)
Router.get('/', viewControler.homeView)
Router.get('/details/:id', viewControler.detailsView)
Router.get('/accessory/create', viewControler.createAccessoryView)


//CRUD
Router.post('/accessory/create', accessoryControler.postCreateAccessory)



Router.post('/create', cubeControler.postCube)





module.exports = Router