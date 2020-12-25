
/*

	Author: Anand Cheerla
	Descripton: Backend

*/

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import passportLocalStrategy from 'passport-local';
import passportLocalMongoose from 'passport-local-mongoose';
import expressSession from 'express-session';

import initializeDatabase from './db/database.js';
import initializeRoutes from './api/index.js';

import {userModel} from './db/models/userModel.js';


//this will take care of db stuff
initializeDatabase();


//express app object
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());


app.use(expressSession({
	secret: "i am akc",
	resave: false,
	saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocalStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());


// app.use(express.static(path.join(__dirname, "/frontend/", "build")));
// app.use(express.static("public"));


// initializeRoutes function returns a express router function which gets executed on the below path as first parameter
app.use('',initializeRoutes());


const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
	console.log("listening to the "+PORT);
});


