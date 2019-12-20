const Bookmark = require("../models/Bookmark")


module.exports = {
    index: (req, res) => {
        Bookmark.find({}).then( (bookmark) => {
            res.json(bookmark)
        })
    }
}