const fs = require('fs')
const db = require('../db.json')
const path = require('path')

class Cube {
    constructor(name, description, imageUrl, difficulty){
        this.name = name,
        this.description = description,
        this.imageUrl = imageUrl,
        this.difficulty = difficulty
    }

     save(){
        this.id = db.cubes[db.cubes.length - 1].id + 1
        db.cubes.push(this)
        const data = JSON.stringify(db, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../db.json'), data)
    }
}

module.exports = Cube