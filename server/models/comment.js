let mongoose = require('mongoose');
let CommentSchema = mongoose.Schema({
	name: {type: String, required:true, minlength:4},
	comment: {type: String, required:true}
})
mongoose.model('Comment', CommentSchema);