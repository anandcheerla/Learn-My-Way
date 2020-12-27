
class userMiddleWares{

    isLoggedIn(req,res,next){

        if(req.isAuthenticated()){
            next();
        }
        else{
        	console.log("please Login");
            res.send(false);
        }
    }

}

export default new userMiddleWares();