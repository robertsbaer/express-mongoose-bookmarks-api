const express = require("express")
const bookmarksController = require("../controllers/bookmarks")

const bookmarksRouter = express.Router()

bookmarksRouter.get("/", bookmarksController.index)

module.exports = bookmarksRouter