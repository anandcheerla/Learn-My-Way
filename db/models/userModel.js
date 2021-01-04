import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';


const userSchema=mongoose.Schema({

	firstName: {type: String},
	lastName: {type: String},
	username: {type: String},
	password: {type: String},
	email: {type: String},
	contactNumber: {type: String},
	country: {type: String},
	favouriteTags: [{type: String}],
	articles:[{type: mongoose.Schema.ObjectId}],
	savedArticles:{type: Map},
	likedArticles:{type: Map},
	timeStamp:{type: Date,default: Date.now}

},{collection:"users"});


userSchema.plugin(passportLocalMongoose);

const userModel= mongoose.model('userModel',userSchema);


export {userSchema,userModel};

