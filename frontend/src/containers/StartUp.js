import React from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router';

// css
import './StartUp.scss';

import SuggestedArticlesMain from '../components/SuggestedArticlesMain.js';


export default function StartUp(props){

    let {path,url} = useRouteMatch();

    return (
        <div id="StartUp">
            <div className="StartUp_about">
                <div className="StartUp_middle-content-two">
                    <div>
                        Read My Way enhances the Readabilty and focus on increasing the effectiveness of Learning.
                    </div>
                </div>
                <div className="StartUp__top-content-one">
                        <div>
                            <div className="StartUp__top-content-tags" id="StartUp__top-content-tag1">
                                <h3>Create</h3>
                            </div>
                            <div className="StartUp__top-content-tags" id="StartUp__top-content-tag2">
                                <h3>Filter</h3>
                            </div>
                        </div>
                        <div>
                            <div id="StartUp_top-content-middle">
                                <h1>CONTENT/</h1>
                            </div>
                        </div>
                        <div>
                            <div className="StartUp__top-content-tags" id="StartUp__top-content-tag3">
                                <h3>Learn!</h3>
                            </div>
                            <div className="StartUp__top-content-tags" id="StartUp__top-content-tag4">
                                <h3>Share!</h3>
                            </div>
                        </div>
                </div>
 
            </div>
            <div>
                  <SuggestedArticlesMain/>
            </div>

            {/* <div className="StartUp__footer">
                RMW@
                AKC@
                contact: anandcheerla999@gmail.com
            </div> */}
        </div>
    );

}