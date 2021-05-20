
import React from 'react';

import ls from "local-storage";
import './Units.css';


import Unit from "./Unit.js";

export default function Units(props){
    return (
        <>
        { 
        props.units
        &&
        props.units.map((unit)=>(
            ls.get(unit._id)==null
            &&
            <Unit
            articleType={props.type}
            heading={unit.heading} 
            shortDescription={unit.shortDescription} 
            longDescription={unit.longDescription}
            priority={unit.priority}
            complexity={unit.complexity}
            unitId={unit._id}
            articleId={props.dbId}
            uploaderUserName={props.uploaderUserName}
            articleIndex={props.articleIndex}
            unitIndex={unit.unitIndex}
            />
          ))
        }
        </>
    )

}