import React from 'react';

//css
import './Tag.css';

function Tag(props){

    return (
        <div class="Tag">
            <h4 class="Tag__tag">{props.tagName}</h4>
        </div>
    );
}

export default Tag;