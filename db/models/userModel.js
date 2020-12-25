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
	savedArticles: [{type: mongoose.Schema.ObjectId}],
	favouriteTags: [{type: String}],
	articles:[{type: mongoose.Schema.ObjectId}],
	timeStamp:{type: Date,default: Date.now}

},{collection:"users"});


userSchema.plugin(passportLocalMongoose);

const userModel= mongoose.model('userModel',userSchema);


export {userSchema,userModel};

