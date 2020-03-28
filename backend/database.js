const mongoose=require("mongoose");

const db=module.exports.dbUrl={
	databaseConnectionUrl:'mongodb://127.0.0.1:27017/learntheakcwaydb',
	secret:'iamakc'
};

const dbUrl=db.databaseConnectionUrl;

mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true  });

const unitSchema=mongoose.Schema({
	heading: {type:String},
	shortDescription: {type:String},
	longDescription: {type:String},
	audioFile: {type:String},
	videoFile: {type:String},
	isAudioFile: {type:Boolean,default: false},
	isVideoFile: {type:Boolean,default: false},
	priority: {type:String,default: '1'},
	nextUnit: {type: mongoose.Schema.ObjectId},
	nextOtherArticleUnit: {type: mongoose.Schema.ObjectId}

},{collection:"unit"});


const unitArraySchema=mongoose.Schema({
	
	units: [{unit: {type:unitSchema}}]

},{collection:"units"});

const userSchema=mongoose.Schema({

	firstName: {type: String},
	lastName: {type: String},
	username: {type: String},
	password: {type: String},
	email: {type: String},
	mobileNumber: {type: String},
	articles:[{type: unitArraySchema}],

},{collection:"user"});




const unitModel=mongoose.model('unitModel',unitSchema);
const unitArrayModel=mongoose.model('unitArrayModel',unitArraySchema); 

module.exports.dbModels={
	unitModel: unitModel,
	unitArrayModel: unitArrayModel
}
