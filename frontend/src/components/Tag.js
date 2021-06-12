import React from 'react';

//css
import './Tag.css';

function Tag(props){

    return (
        <div className="Tag">
            <h4 data-test='Tag__tagName' className="Tag__tag">{props.tagName}</h4>
        </div>
    );
}

export default Tag;