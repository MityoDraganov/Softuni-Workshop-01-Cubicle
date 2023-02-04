const usersModel = require('../models/userSchema')
const bycrypt = require('bcrypt')
const jwtCB = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

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

    }
}

async function logoutPOST (req, res){
    
}

module.exports = {registerPOST, loginPOST, logoutPOST}