const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const BookmarkSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    url: String
})

const Bookmark = mongoose.Model("Bookmark", BookmarkSchema)


module.exports = Bookmark
