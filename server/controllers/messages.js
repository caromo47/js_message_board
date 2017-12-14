let mongoose = require('mongoose');
let Message = mongoose.model('Message');
module.exports = {
	index: (req,res)=>{
		console.log("in the messages controller index method");
		if(!req.session.errors){
			req.session.errors = [];
		}

		Message.find({}).populate('comments').exec((err, messages)=>{
			if(err){
				console.log("how did you mess this up?");
				res.redirect('/');
			}else{
				console.log("found the messages");
				res.render('index_v2', {errors: req.session.errors, messages: messages});
			}
		})
	},
	create: (req,res)=>{
		console.log("in the messages controller create method");
		console.log("req.body:", req.body);
		let newMsg = new Message(req.body);
		newMsg.save((err, savedMsg)=>{
			if(err){
				console.log("Something went wrong");
				let errors = [];
				for (var error in err.errors){
					errors.push(err.errors[key].message);
				},
				req.session.errors = errors;
				res.redirect('/')
			}else{
				console.log("successfully added a message, here it is:", savedMsg);
				res.redirect('/');
			}
		})
	}
}
