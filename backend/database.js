const mongoose=require("mongoose");

const db=module.exports.db_url={
	database_connection_url:'mongodb://127.0.0.1:27017/learntheakcwaydb',
	secret:'iamakc'
};

const db_url=db.database_connection_url;

mongoose.connect(db_url,{ useNewUrlParser: true, useUnifiedTopology: true  });


// const userSchema=mongoose.Schema({},{collection:"user"});

const unitSchema=mongoose.Schema({

	heading: {type:String},
	shortDescription: {type:String},
	longDescription: {type:String},
	audioFile: {type:String},
	videoFile: {type:String},
	isAudioFile: {type:Boolean,default: false},
	isVideoFile: {type:Boolean,default: false},
	priority: {type:String,default: '1'},

},{collection:"unit"});


var unitModel=mongoose.model('unitModel',unitSchema);

module.exports.db_models={
	unitModel: unitModel
}
