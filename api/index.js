import express from 'express';
import user from './routes/user.js';
import article from './routes/article.js';


export default ()=>{
    const app=express.Router();

    user(app);
    article(app);

    return app;

}