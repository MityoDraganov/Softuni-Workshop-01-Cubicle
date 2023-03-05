const userModel = require('../models/userSchema')

async function findByUsername(username){
    const cube = userModel.findOne({username: username})
    return cube
}

module.exports = {findByUsername}