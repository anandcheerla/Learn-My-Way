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

    router.get('/get-all-tags',async (req,res)=>{

        try{
            let articles = await articleService.getTags();
            res.send(articles);
        }
        catch(err){
            console.log(err);
            res.send(false);
        }
    });

    router.get('/get-article/:articleId',async (req,res)=>{

        let articleId=req.params.articleId;

        try{
            let article = await articleService.getArticleById(articleId);
            res.send(article);
        }
        catch(err){
            console.log(err);
            res.send(false);
        }
    });


    app.use('/article',router);

    router.post('/like-article/:articleId',async (req,res)=>{
        let articleId=req.params.articleId;

        try{
            let status = await articleService.likeArticle(articleId);
            res.send(true);
        }
        catch(err){
            console.log(err);
            res.send(false);
        }
    });

    router.post('/unlike-article/:articleId',async (req,res)=>{
        let articleId=req.params.articleId;

        try{
            let status = await articleService.unlikeArticle(articleId);
            res.send(true);
        }
        catch(err){
            console.log(err);
            res.send(false);
        }
    });


    


}