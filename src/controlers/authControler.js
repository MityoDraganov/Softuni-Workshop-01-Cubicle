const usersModel = require('../models/userSchema')

//hashing and security
const bycrypt = require('bcrypt')
const jwtPromises = require('../lib/jwtPromises')
const secret = require('../config/secret')
//cookies


async function findOneUser(username){
    const user =  usersModel.findOne({username: username})
    return user
}

async function registerPOST (req, res){
    const {username, password, rePassword} = req.body

    if(password !== rePassword){
       res.status(404).end()
    }

    //check if username already exists
    const isTaken = await findOneUser(username)
    if(isTaken !== null){
        res.status(404).end()
    } else{

    bycrypt.hash(password, 10).then(function(hash){
        usersModel.create({username: username, password: hash})
    })
    }

    res.redirect('/login')
}

async function loginPOST (req, res){
    const {username, password} = req.body

    //check if username already exists
    const user = await findOneUser(username)
    const hash = user.password
    if(user === null){
        res.status(404).end()
    }


    const match = await bycrypt.compare(password, hash)

    if(match){
        const token = await jwtPromises.sign({username: username}, secret)
        res.cookie('user', token)
        res.redirect('/')
    }
}
async function logoutGET (req, res){
    res.clearCookie('user')
    res.redirect('/users/login')
}

/*
async function logoutPOST (req, res){
    
}
*/

module.exports = {registerPOST, loginPOST, logoutGET}