import mongoose from 'mongoose';


const unitSchema=mongoose.Schema({
	heading: {type: String},
	shortDescription: {type: String},
	longDescription: {type: String},
	imageFile: {type: String},
	audioFile: {type: String},
	videoFile: {type: String},
	priority: {type: Number,default: 2},
	complexity: {type: String},
	createdTime: {type: Date,default: Date.now},
	lastUpdatedTime: {type: Date,default: Date.now},
	unitIndex: {type: Number}

},{collection:"unit"});

const unitModel= mongoose.model('unitModel',unitSchema);


export {unitSchema,unitModel};

