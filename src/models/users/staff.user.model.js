const { Schema } = require('mongoose')

const staffSchema = new Schema({
    rank: {
        type: String,
        default: 'novice'
    },
    department: {
        type: String,
        default: 'none'
    }
}, {timestamps: true});

module.exports = staffSchema;