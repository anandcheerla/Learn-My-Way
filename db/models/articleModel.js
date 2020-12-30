import mongoose from 'mongoose';

import {unitSchema} from './unitModel.js';

const articleSchema=mongoose.Schema({
	username : {type: String},
	heading: {type: String},
	description: {type: String},
	units: [{type: unitSchema}],
	imageFile: {type: String},
	articleTags: [{type: String}],
	uploaderFirstName: {type: String},
	likes: {type:Number,default:0},
	views: {type:Number,default:0},
	likedBy: [{type: String}],
	lastUpdatedTime: {type: Date,default: Date.now},
	createdTime: {type: Date,default: Date.now},
	visibility: {type: String ,default: "private"},
	usersCanAddUnits: {type: Boolean, default: false},
	usersAddedUnits: [{type: mongoose.Schema.ObjectId}],
	usersCanEdit: {type: Boolean, default: false},
	usersEdited: [{type: mongoose.Schema.ObjectId}]

},{collection:"articles"});


const articleModel= mongoose.model('articleModel',articleSchema);


export {articleSchema,articleModel};

