
import {tagModel} from '../db/models/tagModel.js';


class utilities{

   

}

class tagService{

    async addTag(queryObject){
        try{
            let tag = new tagModel();
            tag.tagName = queryObject.tagName;
            tag.description = queryObject.description;
            console.log("one");
            await tag.save();
            console.log("two");
            return true;

        }
        catch(err){
            console.log(err);
            return false;
        }
    }

}

const tagServiceInst = new tagService();

export default tagServiceInst;