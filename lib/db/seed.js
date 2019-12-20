const mongoose = require('./connection')
const data = require('../db/bookmarks.json')
const Bookmark = require('../models/Bookmark')

Bookmark.deleteMany({}).then( () => {
    Bookmark.create(data).then( (dataReturn) => {
        console.log(dataReturn)
        process.exit()
    })
    .catch( (err) => {
        console.log("you suck")
    })
})