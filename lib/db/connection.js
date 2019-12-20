const mongoose = require('mongoose')

const mongoURL = "mongodb://localhost/sei-bookmarks"

mongoose.Promise = Promise

mongoose
.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( feedback => console.log("connected"))
.catch( error => console.log("broken", error))

module.exports = mongoose