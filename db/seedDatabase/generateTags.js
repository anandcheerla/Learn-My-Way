import {tagModel} from '../models/tagModel.js';

var tags = [
{
    tagName: "Computer Science",
    description: ""
},
{
    tagName: "Phsycology",
    description: ""
},
{
    tagName: "Health",
    description: ""
},
{
    tagName: "Engineering",
    description: ""
},
{
    tagName: "Social",
    description: ""
},
{
    tagName: "Exercise",
    description: ""
},
{
    tagName: "cosmology",
    description: ""
},
{
    tagName: "Archaeology",
    description: ""
},
{
    tagName: "React js",
    description: ""
},
{
    tagName: "Web development",
    description: ""
},
{
    tagName: "Science Fiction",
    description: ""
},
{
    tagName: "Java",
    description: ""
},

{
    tagName: "Programming",
    description: ""
}

];

export default function generateTags(){
    tags.forEach(async tag=>{
        let db_tag = new tagModel();
        db_tag.tagName=tag.tagName;
        db_tag.description=tag.description;
        try{
            await db_tag.save();
        }
        catch(err){
            console.log(err);
        }
    });
}
