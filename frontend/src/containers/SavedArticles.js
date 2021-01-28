import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components
import Articles from '../components/Articles.js';

function SavedArticles(props){

    const [savedArticles,setsavedArticles] = useState([]);


    const fetchSavedArticles = ()=>{
        
        axios.get('/user/saved-articles').then((res)=>{
            if(res.data!=false){
                setsavedArticles(res.data);
            }
        });
    }

    useEffect(fetchSavedArticles,[]);

    return (

        <div id="SavedArticles">
            <h3>Saved Articles</h3>
            {
                savedArticles.length==0
                ?
                <h1>No saved Articles!!!</h1>
                :
                <Articles type="savedArticles" articles={savedArticles}/>
            }
        </div>

    );

}

export default SavedArticles;