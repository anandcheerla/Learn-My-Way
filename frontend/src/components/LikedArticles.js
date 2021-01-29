import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components
import Articles from './Articles.js';

function LikedArticles(props){

    const [likedArticles,setLikedArticles] = useState([]);


    const fetchLikedArticles = ()=>{
        
        axios.get('/user/liked-articles').then((res)=>{
            if(res.data!=false){
                setLikedArticles(res.data);
            }
        });
    }

    useEffect(fetchLikedArticles,[]);

    return (

        <div id="LikedArticles">
            <h3>Liked Articles</h3>
            {
                likedArticles.length==0
                ?
                <h1>No Liked Articles!!!</h1>
                :
                <Articles type="likedArticles" articles={likedArticles}/>
            }
        </div>

    );

}

export default LikedArticles;