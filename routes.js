const Router = require('express').Router()

//CONTROLERS
const viewControler = require('./src/controlers/viewControler')
const cubeControler = require('./src/controlers/cubeControler')
const accessoryControler = require('./src/controlers/accessoryControler')
const authControler = require('./src/controlers/authControler')


//MIDDLEWARES
const authMiddleware = require('./src/middlewears/authMiddleware')

//VIEWS

//home and about
Router.get('/', viewControler.homeView)
Router.get('/about', viewControler.aboutView)
Router.get('/404', viewControler.notFound)

//cubes
Router.get('/cubes/create',authMiddleware.authenticationChech,viewControler.createView)
Router.get('/attach/accessory/:id', viewControler.attachAccessoryView)
Router.get('/details/:id', viewControler.detailsView)
Router.get('/accessory/create', viewControler.createAccessoryView)
Router.get('/cubes/edit/:id', viewControler.editCubeView)
Router.get('/cubes/delete/:id', viewControler.deleteCubeView)

//users
Router.get('/users/register', viewControler.registerView)
Router.get('/users/login', viewControler.loginView)
Router.get('/users/logout', authControler.logoutGET)


//CRUD

//cubes and accessories crud
Router.post('/accessory/create', accessoryControler.postCreateAccessory)

Router.post('/cubes/accessory/atach/:id',cubeControler.addAccessoryToCube)

Router.post('/create', cubeControler.postCube)


//auth crud
Router.post('/users/register', authControler.registerPOST)
Router.post('/users/login', authControler.loginPOST)
//Router.post('/users/logout', authControler.logoutPOST)




module.exports = Router