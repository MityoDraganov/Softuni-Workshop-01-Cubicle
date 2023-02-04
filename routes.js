const Router = require('express').Router()
const viewControler = require('./src/controlers/viewControler')
const cubeControler = require('./src/controlers/cubeControler')
const accessoryControler = require('./src/controlers/accessoryControler')

//VIEWS

//home
Router.get('/', viewControler.homeView)
Router.get('/about', viewControler.aboutView)

//cubes
Router.get('/create', viewControler.createView)
Router.get('/attach/accessory/:id', viewControler.attachAccessoryView)
Router.get('/details/:id', viewControler.detailsView)
Router.get('/accessory/create', viewControler.createAccessoryView)

//users
Router.get('/users/register', viewControler.registerView)
Router.get('/users/login', viewControler.loginView)
Router.get('/users/logout', viewControler.logoutView)


//CRUD
Router.post('/accessory/create', accessoryControler.postCreateAccessory)

Router.post('/attach/accessory/:id',cubeControler.addAccessoryToCube)

Router.post('/create', cubeControler.postCube)





module.exports = Router