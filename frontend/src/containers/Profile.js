import React from 'react';
import { Route, Switch } from 'react-router';
import { Link,useRouteMatch } from 'react-router-dom';


//css
import './Profile.css';


import SavedArticles from '../components/SavedArticles.js';
import LikedArticles from '../components/LikedArticles.js';

export default function Profile(props){

    let { path, url } = useRouteMatch();

    return (
        <div>
            <h1>My Profile</h1>
            <Link to={`${url}/saved`}>Saved</Link>
            {/* <Link to={`${url}/liked`}>Liked</Link> */}

            <Switch>
                <Route path={`${path}/saved`}>
                    <SavedArticles/>
                </Route>
                {/* <Route path={`${path}/liked`}>
                    <LikedArticles/>
                </Route> */}

            </Switch>
        </div>
    );

    
}