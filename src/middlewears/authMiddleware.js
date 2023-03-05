const jwtPromises = require('../lib/jwtPromises')
const secret = require('../config/secret')
const authService = require('../services/authService')


async function authenticationChech(req, res, next){

    const user = req.cookies['user']
    if(!user){
        res.redirect('/users/login')
        return
    }
    //console.log(user)
    const decoded = await jwtPromises.verify(user, secret)
    console.log(decoded.username)


    const isRegistered = await authService.findByUsername(decoded.username)
    //console.log(isRegistered)

    if(!isRegistered){
        res.clearCookie('user')
        res.redirect('/users/login')
    }
    
    next()
}

module.exports = {authenticationChech}