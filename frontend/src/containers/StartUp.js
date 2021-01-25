import React from 'react';


// css
import './StartUp.css';

export default function StartUp(props){

    return (
        <div id="StartUp">
            <div className="StartUp__left-content">
                <div><h3>Share Content</h3></div>
                <div><h3>Compose Articles with emphasis one each part</h3></div>
                <div><h3>Prepare Notes</h3></div>
                <div><h3>Filter what you Need!!</h3></div>
            </div>
            <div className="StartUp__right-content">
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