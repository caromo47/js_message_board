let Messages = require('./../controllers/messages');
let Comments = require('./../controllers/comments');
module.exports = (app)=>{
	app.get('/', Messages.index);
	app.post('/messages', Messages.create);
	app.post('/messages/:id/comments', Comments.create);
}