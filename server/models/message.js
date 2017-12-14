let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let MessageSchema = mongoose.Schema({
	name: {type: String, required:true, minlength:4},
	message: {type: String, required:true},
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})
mongoose.model('Message', MessageSchema);