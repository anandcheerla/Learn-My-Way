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
const unitArrayModel=dbModels.unitArrayModel;
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
		mobileNumber: req.body.mobileNumber
	});
	userModel.register(newUser,req.body.password,function(err,user){
		if(err){
			res.send(err.message);
			return res.redirect("/register");
		}
		passport.authenticate("local")(req,res,function(){
			res.send("registered");
		});
	});

});

app.get("/suc",function(req,res){
	res.send("auth is success");
});
app.get("/fail",function(req,res){
	res.send("auth is failed");
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



app.get("/new_article",isLoggedIn,function(req,res){
	let userFromSession=req.session.passport.user;
	console.log(userFromSession);
	userModel.findOne({username:userFromSession},function(err,userDocument){
		let newArticle = new unitArrayModel();
		newArticle.name=req.body.articleName;
		userDocument.articles.push(newArticle);
		userDocument.save(function(err){
			if(err)
			{
				return err;
			}
		});
	
		res.send(newArticle._id);
	});


});


app.post('/:article_id/add_unit',isLoggedIn,function(req,res){
	let userFromSession=req.session.passport.user;
	userModel.findOne({"username":userFromSession},function(err,userDocument){
		let article=userDocument.articles.id(req.params.article_id);
		console.log(article);

		let new_unit=new unitModel();
		new_unit.heading=req.body.heading;
		new_unit.shortDescription=req.body.shortDescription;
		new_unit.longDescription=req.body.longDescription;
		new_unit.audioFile="";
		new_unit.videoFile="";
		new_unit.priority=req.body.priority;

		article.units.push(new_unit);
		userDocument.save(function(err){
			if(err){
				console.log(err);
			}
			res.send("added");
		});

	});

});




const PORT= 5000 || process.env.PORT;

app.listen(PORT,()=>{
	console.log("listening to the "+PORT);
});


