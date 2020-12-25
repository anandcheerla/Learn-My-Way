import express from 'express';
import passport from 'passport';
import { tagModel } from '../../db/models/tagModel.js';
import articleServiceInst from '../../services/articleService.js';


//middlewares


//services
import articleService from '../../services/articleService.js';


const router = express.Router();

export default (app)=>{

    app.use('/topic',router);

    router.get('/:tagName/:page/:limit',async (req,res)=>{
        let tag_name = req.params.tagName;
        let page = parseInt(req.params.page);
        let limit = parseInt(req.params.limit);
        try{
            let articles = await articleService.getArticlesByTag(tag_name,page,limit);
            res.send(articles);
        }
        catch(err){
            console.log(err);
            res.send(false);
        }
    });


}