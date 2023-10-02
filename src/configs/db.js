const mongoose = require('mongoose')

function connect () {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MON, {
        dbName: "test-it",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Zhe database is connected successfully!'))
    .catch(err => console.log(err,':', err.message))
}

module.exports = connect;