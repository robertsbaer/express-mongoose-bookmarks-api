const express = require('express')
const app = express()
const bookmarkRoutes = require("./lib/routes/bookmarks")


app.listen(8080, () => console.log('port 8080 working'))


app.use("/", bookmarkRoutes)