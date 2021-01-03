
import {userModel} from '../db/models/userModel.js';
import {articleModel} from '../db/models/articleModel.js';
import {unitModel} from '../db/models/unitModel.js';
import {tagModel} from '../db/models/tagModel.js';


class utilities{

   

}

class articleService{

    async getArticlesByTag(tag,pageNum,limit){
        console.log("hey there...........")
        try{
            const db_tag = await tagModel.findOne({tagName:tag});

            let articles=[]
            if(db_tag.articles){
                const article_ids = db_tag.articles.slice(pageNum*limit,pageNum*limit+limit);
                const db_articles = await articleModel.find({_id:{"$in":article_ids},visibility:"public"}); 
                return db_articles;
            }            
            else
                return false;
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    async getArticleById(articleId){
        try{
            const db_article = await articleModel.findOne({_id:articleId});
            return db_article;

        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    async getTags(){
        try{
            const db_tags = await tagModel.find({});
            if(db_tags){
                return db_tags;
            }
        }
        catch(err){
            console.log(err);
        }

        return false;
    }

    async likeArticle(articleId){

        try{
            articleModel.findOne({_id:articleId},function(err,article){
                article.likes=article.likes+1;
                article.save(function(err){
                    console.log(err);
                })
            })
        }
        catch(err){
            console.log(err);
        }
    }

    async unlikeArticle(articleId){

        try{
            articleModel.findOne({_id:articleId},function(err,article){
                article.likes=article.likes-1;
                article.save(function(err){
                    console.log(err);
                })
            })
        }
        catch(err){
            console.log(err);
        }
    }

    async viewArticle(articleId){

        try{
            articleModel.findOne({_id:articleId},function(err,article){
                article.views=article.views+1;
                article.save(function(err){
                    console.log(err);
                })
            })
        }
        catch(err){
            console.log(err);
        }
    }

    


}

var articleServiceInst = new articleService();

export default articleServiceInst;