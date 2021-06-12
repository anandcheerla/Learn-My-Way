import React from 'react';


// css
import './StartUp.css';

export default function StartUp(props){

    return (
        <div id="StartUp">
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
            <div className="StartUp_middle-content-one">
            
            </div>
            <div className="StartUp_middle-content-two">
                <div>
                    Read My Way enhances the Readabilty and focusses on increasing the effectiveness of Reading or understanding a article/content.It has the ability to filter out the parts that are required  based on the complexity and priority.
                </div>
            </div>
            <div className="StartUp__footer">
                RMW@
                AKC@
                contact: anandcheerla999@gmail.com
            </div>
        </div>
    );

}