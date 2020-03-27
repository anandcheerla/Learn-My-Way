const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const db=require("./database.js");
const db_models=db.db_models;
const unitModel=db_models.unitModel;
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./public'));

app.get('/',function(req,res){
	
	res.sendFile('/index.html');
});


app.get('/units',function(req,res){
	unitModel.find({},function(err,docs){
		if(err){
			res.send(err);
		}
		else{
			res.send(docs);
		}
	});
});

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
		else{
			res.redirect('/units');
		}
	});

});


const PORT= 5000 || process.env.PORT;

app.listen(PORT,()=>{
	console.log("listening to the "+PORT);
});