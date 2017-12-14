let mongoose = require('mongoose');
let Message = mongoose.model('Message');
let Comment = mongoose.model('Comment');
module.exports = {
	create: (req,res)=>{
		console.log("in the comments controller create method");
		// Find the parent message
		Message.findOne({_id:req.params.id}, (err, message)=>{
			if(err){
				console.log("couldn't find message with that id");
				res.redirect('/');
			}else{
				console.log("found message, creating comment");
				// Define a new comment object
				let newKomment = new Comment(req.body);
				// Save the comment
				newKomment.save((err, savedKomment)=>{
					if(err){
						console.log("something went wrong");
						let errors = [];
						for (var key in err.errors){
							errors.push(err.errors[key].message);
						}
						req.session.errors = errors;
						res.redirect('/')
					}else{
						console.log('successfully created comment')
						// Push comment into the message
						message.comments.push(savedKomment);
						// Save the message
						message.save((err, savedMsg)=>{
							if(err){
								console.log("what you doing?");
								res.redirect('/');
							}else{
								console.log("successfully updated message");
								res.redirect('/');
							}
						})
					}
				})
			}
		})
	}
}