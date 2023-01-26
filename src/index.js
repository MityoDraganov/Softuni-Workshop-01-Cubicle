const express = require('express')
const mongoose = require('mongoose')

const setupViewEngine = require('./config/viewEngineConfig')
const routes = require('../routes')

//Cube Schema




//MONGOOSE DB CONNECTION
async function main(){
    mongoose.set('strictQuery', false)
    await mongoose.connect('mongodb://127.0.0.1:27017/CubicleDataBaseProject')
}
main().catch(err => console.log(err))












const app = express()
setupViewEngine(app)


app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);


app.listen(5000)

