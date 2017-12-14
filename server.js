let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let session = require('express-session');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.use(session({secret:"SuperCereal", saveUninitialized:false}));

require(path.join(__dirname, 'server', 'config', 'mongoose.js'));
let routes_setter = require(path.join(__dirname, 'server', 'config', 'routes.js'));
routes_setter(app);

app.listen(8000, ()=>{
	console.log("Listening on port 8000");
})