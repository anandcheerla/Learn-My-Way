import express from 'express';
import user from './routes/user.js';

export default ()=>{
    const app=express.Router();
    
    user(app);

    return app;

}