const { Schema } = require('mongoose')

const userSchema = new Schema({
    state_of_origin: {
      type: String,
      default: 'admin'
    }
}, {timestamps: true});

module.exports = userSchema