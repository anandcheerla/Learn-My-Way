const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors = require('cors');

const passport=require("passport");
const passportLocalStrategy=require("passport-local");
const passportLocalMongoose=require("passport-local-mongoose");

const db=require("./database.js");
const dbModels=db.dbModels;
const unitModel=dbModels.unitModel;
const articleModel=dbModels.articleModel;
const userModel= dbModels.userModel;


//this is the express app object
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
// app.use(express.static('./public'));
// app.get('/',function(req,res){	
// 	res.sendFile('/index.html');
// });

app.use(require("express-session")({
	secret: "i am akc",
	resave: false,
	saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocalStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());


//------------------------------------routes--------------------------------------

// app.get('/units',function(req,res){

// 	unitModel.find({},function(err,docs){
// 		if(err){
// 			res.send(err);
// 		}
// 		else{
// 			res.send(docs);
// 		}
// 	});
// });


//register routes

app.get("/register",function(req,res){

});

app.post("/register",function(req,res){
	let newUser=new userModel({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		contactNumber: req.body.contactNumber
	});
	userModel.register(newUser,req.body.password,function(err,user){
		if(err){
			//res.send(err.message);
			return res.redirect("/register");
		}
		passport.authenticate("local")(req,res,function(){
			res.send("registered");
		});
	});

});

app.get("/suc",function(req,res){
	res.send("success");
});
app.get("/fail",function(req,res){
	res.send("fail");
});

//login routes

app.get("/login",function(req,res){
	res.send("please login");
});

app.post("/login",passport.authenticate("local",{successRedirect: "/suc",failureRedirect: "/fail"}),function(req,res){
	// console.log("logged in as"+req.session.username);
});


//is logged in middleware
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		next();
	}
	else{
		res.redirect("/login");
	}
}

//logout route
app.get("/logout",function(req,res){
	req.logout();	
});



app.get("/articles",isLoggedIn,function(req,res){
	let userFromSession=req.session.passport.user;

	userModel.findOne({username:userFromSession},function(err,userDocument){
		if(err)
		{
			res.send("error");	
			return;
		}

		let articles=userDocument.articles;
		res.send(articles);

	});

});



//creating a new article 
//returns the article id which can be used to insert unit data
app.post("/new-article",isLoggedIn,function(req,res){
	let userFromSession=req.session.passport.user;
	// console.log(userFromSession);
	userModel.findOne({username:userFromSession},function(err,userDocument){
		let newArticle = new articleModel();
		newArticle.heading=req.body.heading;
		newArticle.description=req.body.description;
		userDocument.articles.push(newArticle);
		userDocument.save(function(err){
			if(err)
			{
				res.send("fail");
			}
			else{
				res.send(newArticle);
			}
		});
	
	
	});


});


//add unit for particular articles
app.post('/add-unit/:articleId',isLoggedIn,function(req,res){
	let userFromSession=req.session.passport.user;
	let articleId=req.params.articleId;


	let queryObject={
		"username":userFromSession,
	}
	userModel.findOne(queryObject,function(err,userDocument){
		let article=userDocument.articles.id(articleId);

		// console.log(article.units[0].parent());
		let new_unit=new unitModel();
		new_unit.heading=req.body.heading;
		new_unit.shortDescription=req.body.shortDescription;
		new_unit.longDescription=req.body.longDescription;
		new_unit.imageFile="";
		new_unit.audioFile="";
		new_unit.videoFile="";
		new_unit.priority=req.body.priority;
		console.log(req.body.complexity);
		new_unit.complexity=req.body.complexity;


		article.units.push(new_unit);
		userDocument.save(function(err){
			if(err){
				console.log(err);
			}
			res.send(new_unit);
		});

	});

});




const PORT= 5000 || process.env.PORT;

app.listen(PORT,()=>{
	console.log("listening to the "+PORT);
});


