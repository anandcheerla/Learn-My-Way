const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors = require('cors')

const db=require("./database.js");
const dbModels=db.dbModels;
const unitModel=dbModels.unitModel;
const unitArrayModel=dbModels.unitArrayModel;


//this is the express app object
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
// app.use(express.static('./public'));


// app.get('/',function(req,res){
	
// 	res.sendFile('/index.html');
// });



//------------------------------------routes--------------------------------------

app.get('/units',function(req,res){

	unitArrayModel.find({},function(err,docs){
		if(err){
			res.send(err);
		}
		else{
			res.send(docs);
		}
	});
});



let article=new unitArrayModel();


app.post('/add_unit',function(req,res){

	let new_unit=new unitModel();
	new_unit.heading=req.body.heading;
	new_unit.shortDescription=req.body.shortDescription;
	new_unit.longDescription=req.body.longDescription;
	new_unit.audioFile="";
	new_unit.videoFile="";
	new_unit.priority=req.body.priority;

	new_unit.save(function(err){
		if(err){
			res.send(err);
		}
	});
	article.units.push({unit: new_unit});
	article.save(function(err){
		if(err){
			res.send(err);
		}
		else{
			res.redirect('/units');
		}
	});


});


const PORT= 5000 || process.env.PORT;

app.listen(PORT,()=>{
	console.log("listening to the "+PORT);
});


