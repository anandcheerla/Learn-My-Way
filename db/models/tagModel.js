import mongoose from 'mongoose';

const tagSchema = mongoose.Schema({
	tagName: {type:String},
	description: {type:String},
	articles: [{type: mongoose.Schema.ObjectId}]
},{collection:"tags"});


const tagModel= mongoose.model('tagModel',tagSchema);



export {tagSchema,tagModel};

