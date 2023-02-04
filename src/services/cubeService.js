const cubeModel = require('../models/cubeSchema')

async function findOneCube(id){
    const cube = cubeModel.findById(id).lean()

    return cube
}

function cubeDificultyLabel(difficulty){
    let label = ''
    switch(difficulty){
        case 1:
            label = 'Very Easy'
            break;
        case 2:
            label = 'Easy'
            break;
        case 3:
            label = 'Medium (Standard 3x3)'
            break;
        case 4:
            label = 'Intermediate'
            break;
        case 5:
            label = 'Expert'
            break;
        case 6:
            label = 'Hardcore'
            break;
    }
    return label
}

module.exports = {findOneCube, cubeDificultyLabel}