const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const errorHandler  = require("./handlers/error")

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

//all routes here

app.use(function(req,res,next){
	let err = new Error("Not Found") //built in constructor fnc in JS
	err.status = 404
	next(err);
})

app.use(errorHandler);

app.listen(PORT, function(){
	console.log('Server started...')
})