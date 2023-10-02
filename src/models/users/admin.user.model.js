const { Schema } = require('mongoose')

const adminSchema = new Schema({
    role: {
      type: String,
      enum: ['admin', 'super admin'],
      default: 'admin'
    }
}, {timestamps: true});

module.exports = adminSchema