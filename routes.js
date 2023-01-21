const Router = require('express').Router()
const viewControler = require('./src/controlers/viewControler')
const cubeControler = require('./src/controlers/cubeControler')

//VIEWS
Router.get('/', viewControler.homeView)
Router.get('/create', viewControler.createView)
Router.get('/about', viewControler.aboutView)
Router.get('/', viewControler.homeView)
Router.get('/details/:id', viewControler.detailsView)

//CRUD
Router.post('/create', cubeControler.postCube)






module.exports = Router