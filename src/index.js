const express = require('express')


const setupViewEngine = require('./config/viewEngineConfig')
const routes = require('../routes')







const app = express()
setupViewEngine(app)


app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);


app.listen(5000)

