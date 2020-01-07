var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: String,
    userName: String,
    city: String,
    State: String,
    passwordHash: String,
    passwordSalt: String
});
module.exports = mongoose.model('User', UserSchema);