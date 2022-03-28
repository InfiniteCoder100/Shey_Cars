const mongoose = require("mongoose");

function connectDB() {


    mongoose.connect('mongodb+srv://cloud_ckhathri:xRlRcHSYdq1T2na0@cluster0.wnhy7.mongodb.net/sheycars-udemy', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
