/**
 * Created by leojpod on 3/5/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var poolSchema = new Schema({
  title: {type: String, required: true, unique: true},
  questions: [String],
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});

var Pool = mongoose.model('Pool', poolSchema);

module.exports = Pool;
