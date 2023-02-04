const accessoryModel = require('../models/accessorySchema')


async function postCreateAccessory(req,res){
    console.log('post')
    console.log(req.body)
    const {name, description, imageUrl} = req.body
    const accessory = new accessoryModel({
        "name": name,
        "description": description,
        "imageURL": imageUrl,
    })
    accessory.save(function(err){
        if(err){
            console.log(err)
        }
    })
    res.redirect('/')
}

async function readAccessories(){
    const accessories = accessoryModel.find().lean()
    console.log('accesories')
    return accessories
}

module.exports = {postCreateAccessory, readAccessories}