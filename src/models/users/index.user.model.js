const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      default: 'email'
  },
    password: {
      type: String
  },
}, {timestamps: true});

module.exports.Staff = mongoose.model('User', userSchema).discriminator('Staff', require('./staff.user.model'))
module.exports.Admin = mongoose.model('User', userSchema).discriminator('Admin', require('./admin.user.model'))
module.exports.User = mongoose.model('User', userSchema).discriminator('Normal-User', require('./user.user.model'))