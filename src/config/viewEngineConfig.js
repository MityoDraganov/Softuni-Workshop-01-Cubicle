const {engine} = require('express-handlebars')
//const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

function setupViewEngine(app){
    app.engine('hbs', engine({
        extname: 'hbs',
        //handlebars: allowInsecurePrototypeAccess(engine),
    }))

    
    app.set('view engine', 'hbs');
    app.set('views', "./src/views")
    
}

module.exports = setupViewEngine