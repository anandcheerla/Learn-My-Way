
import {userModel} from '../db/models/userModel.js';
import {articleModel} from '../db/models/articleModel.js';
import {unitModel} from '../db/models/unitModel.js';
import {tagModel} from '../db/models/tagModel.js';


class utilities{

   

}

class articleService{

    async getArticlesByTag(tag,pageNum,limit){
        try{
            const db_tag = await tagModel.find({tagName:tag});
            const articles = db_tag.articles.slice(pageNum*limit,pageNum*limit+limit);
            return articles;
        }
        catch(err){
            console.log(err);
            return false;
        }
    }


}

var articleServiceInst = new articleService();

export default articleServiceInst;