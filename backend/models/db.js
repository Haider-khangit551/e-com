const mongoose = require('mongoose')

const mongo_uri = process.env.MONGO_URL
mongoose.connect(mongo_uri)
    .then(() => {
        console.log("db connected");
    })
    .catch((error) => {
        console.log("mongo db error :", error)
    })