
class userMiddleWares{

    isLoggedIn(req,res,next){

        if(req.isAuthenticated()){
            next();
        }
        else{
            res.send("Please Login");
        }
    }

}

export default new userMiddleWares();