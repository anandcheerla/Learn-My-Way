import React from 'react';

//css
import './Tag.css';

function Tag(props){

    return (
        <div class="Tag">
            <h4>{props.tagName}</h4>
        </div>
    );
}

export default Tag;