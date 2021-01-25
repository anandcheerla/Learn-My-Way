import express from 'express';
import passport from 'passport';


//middlewares
import userMiddlewares from '../middlewares/userMiddlewares.js';


//services
import userService from '../../services/userService.js';
import { userModel } from '../../db/models/userModel.js';


const router = express.Router();

export default (app)=>{

    app.use('/user',router);

    router.post("/register",async function(req,res){
        
        console.log(req.body);

        let queryObject={
            "inputData":req.body
        }
        let sign_up_status = await userService.signUp(queryObject);
        
        // console.log(sign_up_status);
        if(sign_up_status==true){
            passport.authenticate("local")(req,res,function(){
                   
            });
           res.send(true);
        }
        else{
            res.send(sign_up_status);
        }

    });

    router.get("/suc",async function(req,res){
        let userFromSession=req.session.passport.user;
        let queryObject={
            "userFromSession": userFromSession
        }
        console.log("success");

        try{
            let profile = await userService.getUserProfile(queryObject);
            res.send(profile);
        }
        catch(err){
            res.send(false);
        }
    });
    
    router.get("/fail",function(req,res){
        console.log("fail");
        res.send(false);
    });
    

    router.post("/login",passport.authenticate("local",{successRedirect: "/user/suc",failureRedirect: "/user/fail"}),function(req,res){
        console.log("success");
        // res.send(true);
        // res.send("Login success");
    });


    router.get("/logout",function(req,res){
        console.log("logout");
        req.logout();
        res.send("logged out");	
    });


    router.get("/my-articles",userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;
        
        let queryObject={
            "userFromSession": userFromSession
        }

        try{
            let my_articles = await userService.getMyArticles(queryObject);
            if(my_articles==false)
                res.send(false);
            else
                res.send(my_articles);
        }
        catch(err){
            console.log(false);
            res.send(false);
        }
    
    });

    router.get("/saved-articles",userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession = req.session.passport.user;

        let queryObject = {
            "userFromSession": userFromSession
        }

        try{
            let saved_articles = await userService.getSavedArticles(queryObject);
            res.send(saved_articles);
        }
        catch(err){
            console.log(err);
            res.send(false);
        }
    });

    router.post("/new-article",userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;

        let input_data = req.body;
        let queryObject={
            "userFromSession": userFromSession,
            "inputData":input_data
        }

        console.log(queryObject);
        try{
            let new_article = await userService.createNewArticle(queryObject);
            if(new_article==false)
                res.send(false);
            else
                res.send(new_article);

        }
        catch(err){
            console.log("error caught");
        }
        res.send(false);
        

    });

    
    router.put('/article-update/:articleId',userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;
        let articleId=req.params.articleId;

        let queryObject={
            "username":userFromSession,
        }

        const updated_article = await userService.updateArticle(queryObject);

      
        res.send();
    });


    router.delete("/article-delete/:articleId",userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;
        let articleId=req.params.articleId;
        let queryObject={
            "username":userFromSession,
            "articleId":articleId
        }
        
        try{
            const temp = await userService.deleteArticle(queryObject);
            res.send("success");
        }
        catch(err){
            res.send("fail");
        }
        
    });

    //add unit for particular articles
    router.post('/:articleId/add-unit',userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;
        let articleId=req.params.articleId;

        let queryObject={
            "username":userFromSession,
            "articleId": articleId,
            "inputData": req.body
        }
        try{
            let new_unit = await userService.addUnit(queryObject);
            res.send(new_unit);
        }
        catch(err){
            res.send(false);
        }

    });


    router.put('/:articleId/update-unit/:unitId',userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;
        let articleId=req.params.articleId;
        let unitId=req.params.unitId;
        
        let queryObject={
            "username":userFromSession,
            "articleId": articleId,
            "unitId": unitId,
            "inputData": req.body
        }


        try{
            await userService.updateUnit(queryObject);
            res.send(true);
        }
        catch(err){
            res.send(false);
        }

        
    });

    router.delete("/:articleId/delete-unit/:unitId",userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;
        let articleId=req.params.articleId;
        let unitId=req.params.unitId;

        let queryObject={
            "username":userFromSession,
            "articleId":articleId,
            "unitId": unitId
        }

        try{
            await userService.deleteUnit(queryObject);
            res.send(true);
        }
        catch(err){
            res.send(false);
        }

        
    });


    router.get("/:articleId/make-article-public",userMiddlewares.isLoggedIn,async function(req,res){
        
        let articleId=req.params.articleId;

        let queryObject={
            "articleId":articleId,
        }

        console.log(articleId);
        try{
            console.log("hey there");
            let done = await userService.makeArticlePublic(queryObject);
            console.log(res);
            if(done)
                res.send(true);
            else
                res.send(false);
        }
        catch(err){
            res.send(false);
        }
    });

    router.get("/:articleId/make-article-private",userMiddlewares.isLoggedIn,async function(req,res){
        let articleId=req.params.articleId;

        let queryObject={
            "articleId":articleId,
        }

        try{
            let done = await userService.makeArticlePrivate(queryObject);
            if(done)
                res.send(true);
            else
                res.send(false);
        }
        catch(err){
            res.send(false);
        }
    });

    router.post("/like-article/:articleId",userMiddlewares.isLoggedIn,async function(req,res){
        let articleId=req.params.articleId;
        let userFromSession=req.session.passport.user;

        let queryObject={
            "articleId":articleId,
            "userFromSession": userFromSession
        }

        try{
            let done = await userService.likeArticle(queryObject);
            console.log(done);
            res.send(done);
        }
        catch(err){
            res.send(false);
        }
    });

    router.post("/save-article/:articleId",userMiddlewares.isLoggedIn,async function(req,res){
        let articleId=req.params.articleId;
        let userFromSession=req.session.passport.user;

        let queryObject={
            "articleId":articleId,
            "userFromSession": userFromSession
        }

        try{
            let done = await userService.saveArticle(queryObject);
            res.send(done);
        }
        catch(err){
            res.send(false);
        }
    });

    
    router.post("/unsave-article/:articleId",userMiddlewares.isLoggedIn,async function(req,res){
        let articleId=req.params.articleId;
        let userFromSession=req.session.passport.user;

        let queryObject={
            "articleId":articleId,
            "userFromSession": userFromSession
        }

        try{
            let done = await userService.unsaveArticle(queryObject);
            res.send(done);
        }
        catch(err){
            res.send(false);
        }
    });


    router.get("/get-user",userMiddlewares.isLoggedIn,async function(req,res){
        let userFromSession=req.session.passport.user;

        let queryObject={
            "userFromSession": userFromSession
        }

        try{
            let user = await userService.getUserProfile(queryObject);
            res.send(user);
        }
        catch(err){
            res.send(false);
        }
    });

    

    router.get("/akc",function(req,res){
        console.log("akc");
        res.send("this is akc!!!!");
    });
}