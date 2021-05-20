
import { expect } from 'chai';
import initializeDatabase from '../../db/database.js';
import userService from '../../services/userService.js';
import mongoose from 'mongoose';

before(async function(){
    await initializeDatabase();
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {   
        await collection.deleteOne(); 
    }
});

let user1={
    inputData:{
        username: "akc",
        password: "anandcheerla",
        firstName: "anand",
        lastName: "cheerla",
        email: "akc@gmail.com",
        contactNumber: "123456789"
    }
}

describe('user signup testing',function(){
 

    it('tests adding new user',async function(){

        let res = await userService.signUp(user1);
        expect(res).to.be.true;
    });

    it('tests adding same user again',async function(){

        let res = await userService.signUp(user1);
        expect(res).to.equal("A user with the given username is already registered");
    });


});


let articleId;
describe('create new article function testing',function(){
    let article = {
        inputData: {
            heading: "i am heading",
            description: "i am description",
            tags: ['Computer Science','Psychology'],
            uploaderFirstName: user1.firstName
        },
        userFromSession: user1.inputData.username
    }
    it('tests creating new article',async function(){
        let res=await userService.createNewArticle(article);
        articleId = res._id;
        expect(res).to.not.be.false;
        expect(res.heading).to.equal('i am heading');
        expect(res.description).to.equal('i am description');
        expect(res.articleTags).to.have.members(['Computer Science','Psychology']);
        expect(res.uploaderFirstName).to.equal('anand');

    });

    
    it('tests creating new article with unregistered user',async function(){
        let res=await userService.createNewArticle({...article,userFromSession: "ironman"});
        expect(res).to.be.false;
    });

});

describe('Update artcile function testing',function(){

    it('tests updating article',async function(){
        let updated_article = {
            inputData: {
                heading: "i am updated heading",
                description: "i am updated description",
            },
            articleId: articleId
        }
    
        let res=await userService.updateArticle(updated_article);
        
        expect(res).to.not.be.false;
        expect(res.heading).to.equal('i am updated heading');
        expect(res.description).to.equal('i am updated description');
    });
 
});


describe('Delete artcile function testing',function(){

    it('tests deleting article',async function(){
        let article = {
            articleId: articleId
        }
    
        let res=await userService.deleteArticle(article);
        expect(res).to.not.be.false;
    });

    it('tests deleting article which is not present',async function(){
        let article = {
            articleId: articleId+"12345"
        }
    
        let res=await userService.deleteArticle(article);
        expect(res).to.be.false;
    });

    it('tests deleting article with no articleId',async function(){
        let article = {
            articleId: null
        }
    
        let res=await userService.deleteArticle(article);
        expect(res).to.be.false;
    });

 
});
