import express from 'express';
import { tagModel } from '../../db/models/tagModel.js';


//services
import tagService from '../../services/tagService.js';


const router = express.Router();

export default (app)=>{
    app.use('/tag',router);

    router.post('/add-tag',async (req,res)=>{
        console.log("add-tag route");
        let queryObject = req.body;
        try{
            await tagService.addTag(queryObject);
            res.send(true);
        }
        catch(err){
            console.log(err);
            res.send(false);
        }
    });



}