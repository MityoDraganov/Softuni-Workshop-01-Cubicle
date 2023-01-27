const accessoryModel = require('../models/accessorySchema')


async function postCreateAccessory(req,res){
    console.log('post')
    console.log(req.body)
    const {name, description, imageUrl} = req.body
    const allCurrentAccessories = await accessoryModel.find().lean()
    const _id = allCurrentAccessories[allCurrentAccessories.length -1]._id + 1
    const accessory = new accessoryModel({
        "_id" : _id,
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

module.exports = {postCreateAccessory}