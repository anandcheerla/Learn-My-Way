import app from './index.js'

app=app.app;

const db=require("./database.js");
const db_models=db.db_models;
const unitModel=db_models.unitModel;


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