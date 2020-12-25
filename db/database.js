/*

	Author: Anand Kumar Cheerla
	Descripton: Database connection and schema declarations is defined in this file

*/

import mongoose from 'mongoose';
// import user from './models/userModel.js';


// import generateTags from './seedDatabase/generateTags.js';
// generateTags();


export default async ()=>{
	const db = {
		databaseConnectionUrl:'mongodb://127.0.0.1:27017/sampleDB1',
		// databaseConnectionUrl : "mongodb+srv://anand:anandcheerla@cluster0.x0oeh.mongodb.net/ReadMyway?retryWrites=true&w=majority",
		secret:'iamakc'
	};

	var dbUrl = db.databaseConnectionUrl;

	try{
		await mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true });
		console.log("database connection success");
	}
	catch(err){
		console.log("database connection failed");
	}
	// console.log(temp);

}
