
import {userModel} from '../db/models/userModel.js';
import {articleModel} from '../db/models/articleModel.js';
import {unitModel} from '../db/models/unitModel.js';
import {tagModel} from '../db/models/tagModel.js';


import articleService from './articleService.js';

class utilities{

    putArticleInTagsCollection(articleId,tags){
        
        tags.forEach(tag => {
            tagModel.findOne({tagName:tag},function(err,doc){
                if(doc && doc.articles){
                    try{
                        doc.articles.push(articleId);
                        doc.save(function(err){
                            console.log(err);
                        });
                    }
                    catch(err){
                        console.log(err);
                    }
                }
            });

        });
    }

}

var utility = new utilities();

class userService{


    async signUp(queryObject){

        let newUser=new userModel({
            username: queryObject.inputData.username,
            firstName: queryObject.inputData.firstName,
            lastName: queryObject.inputData.lastName,
            email: queryObject.inputData.email,
            contactNumber: queryObject.inputData.contactNumber,
            likedArticles: new Map(),
            savedArticles: new Map() 
        });

        try{
            const temp = await userModel.register(newUser,queryObject.inputData.password);
            return true;
        }
        catch(err){
           return err.message;
        }

    }

    signIn(){

        //used passport middleware in the api method user
    }

    async getMyArticles(queryObject){
        console.log(queryObject.userFromSession);

        try{
            const my_articles = await articleModel.find({username:queryObject.userFromSession});
            return my_articles;
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    async getSavedArticles(queryObject){

        try{
            const db_user = await userModel.findOne({username:queryObject.userFromSession});
            const articleIds = [...db_user.savedArticles.keys()];
            const db_articles = await articleService.getArticlesByIds(articleIds);
            return db_articles;
        }
        catch(err){
            console.log(err);
            return false;
        }

    }


    async getUserProfile(queryObject){

        try{
            const profile = await userModel.findOne({username: queryObject.userFromSession});
            return profile;
        }
        catch(err){
            return false;
        }

    }

    async createNewArticle(queryObject){
        try{
            const db_user = await userModel.findOne({username:queryObject.userFromSession});
            if(db_user==null){
                throw new Error('No such user');
            }
            let size_of_articles = db_user.articles.length;
            let new_article = new articleModel();
            new_article.heading=queryObject.inputData.heading;
            new_article.description=queryObject.inputData.description;
            new_article.articleTags=queryObject.inputData.tags;
            new_article.username=queryObject.userFromSession;
            new_article.uploaderFirstName = db_user.firstName;


            try{
                const new_article_db = await new_article.save();
                if(new_article.articleTags!=[])
                    utility.putArticleInTagsCollection(new_article_db._id,new_article.articleTags);
                await db_user.articles.push(new_article_db._id);
                return new_article_db;
            }
            catch(err){
                console.log(err);
                return false;
            }
           
        }
        catch(err){
            console.log(err);
            return false;
        }

    }


    async updateArticle(queryObject){
        try{

            const db_article = await articleModel.findById(queryObject.articleId);

            //update others which are needed,add necessary conditions if required
            db_article.heading=queryObject.inputData.heading;
            db_article.description=queryObject.inputData.description;
            db_article.lastUpdatedTime=Date.now();

            try{
                let res=await db_article.save();
                return res;
            }
            catch(err){
                console.log(err);
                return false;   
            }

        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    async deleteArticle(queryObject){
        try{
            const db_article = await articleModel.deleteOne({_id:queryObject.articleId});
            if(db_article.n==1 && db_article.deletedCount==1)
                return true;
            else
                return false;
            //need to implement removal reference from the user also
         
        }
        catch(err){
            return false;
        }
    }

    async addUnit(queryObject){
        try{
            const db_article = await articleModel.findById(queryObject.articleId);
            let size_of_units = db_article.units.length;
            
            let new_unit=new unitModel();
            new_unit.heading=queryObject.inputData.heading;
            new_unit.shortDescription=queryObject.inputData.shortDescription;
            new_unit.longDescription=queryObject.inputData.longDescription;
            new_unit.imageFile="";
            new_unit.audioFile="";
            new_unit.videoFile="";
            new_unit.priority=queryObject.inputData.priority;
            new_unit.complexity=queryObject.inputData.complexity;
            new_unit.unitIndex=size_of_units;

            try{
                await db_article.units.push(new_unit);
                await db_article.save();
                return new_unit;
            }
            catch(err){
                return false;
            }
            
        }

        catch(err){
            return false;
        }

            
    }


    async updateUnit(queryObject){

        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});

            let db_unit=db_article.units.id(queryObject.unitId);

            db_unit.heading=queryObject.inputData.heading;
            db_unit.shortDescription=queryObject.inputData.shortDescription;
            db_unit.longDescription=queryObject.inputData.longDescription;
            db_unit.priority=queryObject.inputData.priority; 
            db_unit.complexity=queryObject.inputData.complexity;

            try{
                await db_article.save();
                return true;
            }
            catch(err){
                return false;
            }

        }
        catch(err){
            return false;
        }
    }


    async deleteUnit(queryObject){

        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});
           
            let db_unit=db_article.units.id(queryObject.unitId);


            try{
                await db_unit.remove();
                await db_article.save();
            }
            catch(err){
                return false;
            }
    

        }
        catch(err){
            return false;
        }
    }


    async saveArticle(queryObject){

        try{
            const db_user = await userModel.findOne({username:queryObject.userFromSession});
            if(db_user.savedArticles){
                db_user.savedArticles.set(queryObject.articleId,true);
                await db_user.save();
            }
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }

    async unsaveArticle(queryObject){

        try{
            const db_user = await userModel.findOne({username:queryObject.userFromSession});
            console.log(db_user.savedArticles);
            if(db_user.savedArticles){
                db_user.savedArticles.delete(queryObject.articleId);
                await db_user.save();
            }
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }


    

    async likeArticle(queryObject){
        let temp;
        try{
            const db_user = await userModel.findOne({username:queryObject.userFromSession});
            console.log(db_user);
            console.log(db_user.likedArticles);
            if(db_user.likedArticles){
                if(db_user.likedArticles.get(queryObject.articleId)==undefined || db_user.likedArticles.get(queryObject.articleId)==false){
                    db_user.likedArticles.set(queryObject.articleId,true);
                    await articleService.likeArticle(queryObject.articleId);
                    temp="liked";
                }
                else{ 
                    db_user.likedArticles.set(queryObject.articleId,false);
                    await articleService.unlikeArticle(queryObject.articleId);
                    temp="unliked";
                }
                await db_user.save();
                
                return temp;
            }
           
        }
        catch(err){
            console.log(err);
        }

        return false;

    }


    async addFavouriteTags(queryObject){

        try{
            const db_user = await userModel.findOne({_id:queryObject.userFromSession});
            if(db_user.favouriteTags){
                db_user.favouriteTags.push(queryObject.tagName);
                await db_user.save();
            }
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }

    async makeArticlePublic(queryObject){
        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});
            db_article.visibility="public";
            await db_article.save();
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }

    async makeArticlePrivate(queryObject){
        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});
            db_article.visibility="private";
            await db_article.save();
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }
   
    async addUserCanEdit(queryObject){
        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});
            db_article.usersCanEdit=true;
            await db_article.save();
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }

    async removeUserCanEdit(queryObject){
        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});
            db_article.usersCanEdit=false;
            await db_.save();
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }

    async addUserCanAddUnits(queryObject){
        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});
            db_article.usersCanAddUnits=true;
            await db_.save();
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }

    async removeUserCanAddUnits(queryObject){
        try{
            const db_article = await articleModel.findOne({_id:queryObject.articleId});
            db_article.usersCanAddUnits=false;
            await db_.save();
            return true;
        }
        catch(err){
            console.log(err);
        }

        return false;

    }

}



var userServiceInst = new userService();

export default userServiceInst;