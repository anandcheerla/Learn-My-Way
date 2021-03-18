
import { expect } from 'chai';
import initializeDatabase from '../../db/database.js';
import userService from '../../services/userService.js';
import mongoose from 'mongoose';


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

before(async function(){
    await initializeDatabase();
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {   
        await collection.deleteOne(); 
    }
});


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
