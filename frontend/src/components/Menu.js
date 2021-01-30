import React,{useState} from 'react';

import './Menu.css';

export default function Menu(props){
    const [menuClicked, setMenuClicked] = useState(false);
    return (
        <div>
            <div onClick={()=>setMenuClicked(!menuClicked)}>
                {props.children}
            </div>
            {
            menuClicked
            &&
            <div className="Menu__items-div">
            { 
                props.items.map((item)=>(
                    <div>{item}</div>
                ))
            }
            </div>
            }
        </div>
    );
}