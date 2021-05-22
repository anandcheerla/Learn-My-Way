/*

	Author: Anand Kumar Cheerla
	Descripton: Database connection and schema declarations is defined in this file

*/

import mongoose from 'mongoose';
import {db_uri,db_secret} from '../config/index.js';
// import user from './models/userModel.js';

// import generateTags from './seedDatabase/generateTags.js';
// generateTags();


export default async ()=>{
	const db = {
		databaseConnectionUrl: db_uri,
		secret: db_secret
	};

	var dbUrl = db.databaseConnectionUrl;

	try{
		console.log("connecting to database "+dbUrl);
		await mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true });
		console.log("database connection succes");
	}
	catch(err){
		console.log("database connection failed");
	}

}
