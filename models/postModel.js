var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var postSchema = new Schema({
	'title' : String,
	'headline' : String,
	'imagurl' : String,
	'body' : String,
	'date' : Date
});

module.exports = mongoose.model('post', postSchema);
