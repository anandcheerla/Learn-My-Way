
/*

	Author: Anand Kumar Cheerla
	Descripton: Database connection and schema declarations is defined in this file

*/

const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");

const db=module.exports.dbUrl={
	// databaseConnectionUrl:'mongodb://127.0.0.1:27017/learntheakcwaydb',
	databaseConnectionUrl : "mongodb+srv://anand:anandcheerla@cluster0.x0oeh.mongodb.net/ReadMyway?retryWrites=true&w=majority",
	secret:'iamakc'
};

const dbUrl=db.databaseConnectionUrl;

mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true  });

const unitSchema=mongoose.Schema({
	heading: {type: String},
	shortDescription: {type: String},
	longDescription: {type: String},
	imageFile: {type: String},
	audioFile: {type: String},
	videoFile: {type: String},
	priority: {type: Number,default: 2},
	complexity: {type: String},
	createdTime: {type: Date,default: Date.now}

	//nextUnit: {type: mongoose.Schema.ObjectId},
	//nextOtherArticleUnit: {type: mongoose.Schema.ObjectId}

},{collection:"unit"});


const articleSchema=mongoose.Schema({
	
	heading: {type: String},
	description: {type: String},
	units: [{type: unitSchema}],
	imageFile: {type: String},
	likes: {type:Number,default:0},
	clicks: {type:Number,default:0},
	lastUpdatedTime: {type: Date,default: Date.now},
	createdTime: {type: Date,default: Date.now}

},{collection:"units"});

const userSchema=mongoose.Schema({

	firstName: {type: String},
	lastName: {type: String},
	username: {type: String},
	password: {type: String},
	email: {type: String},
	contactNumber: {type: String},
	articles:[{type: articleSchema}],
	timeStamp:{type: Date,default: Date.now}

},{collection:"users"});

userSchema.plugin(passportLocalMongoose);


const unitModel= mongoose.model('unitModel',unitSchema);
const articleModel= mongoose.model('articleModel',articleSchema);
const userModel= mongoose.model('userModel',userSchema);

module.exports.dbModels={
	unitModel: unitModel,
	articleModel: articleModel,
	userModel: userModel
}
