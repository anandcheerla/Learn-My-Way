const app=require('./index.js');
app=app.app;

const db=require("./database.js");
const db_models=db.db_models;
const unitModel=db_models.unitModel;


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