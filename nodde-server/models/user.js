/**
 * Created by leojpod on 3/5/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean},
  isCreator: {type: Boolean}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
