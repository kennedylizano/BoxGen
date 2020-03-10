


import React, { useState } from "react";

const Tabs = props => {
    const [ displaying, setDisplay] = useState({});
    const [ doDisplay, setDoDisplay] = useState(false);
    const tabs = [
        {title:"First Tab", content:"This is the first tab"},
        {title:"Second Tab", content:"THis is the second tab"},
        {title:"Third Tab", content:"This is the third tab"}
    ];
    // setTabs([...tabs,{title:"First Tab", content:"This is the first tab"}])
    const onClickHandler = e => {
        console.log(e.target.value);
        setDisplay(tabs[e.target.value]);
        setDoDisplay(true);
        console.log(displaying);
    }
    return(
        <div>
            <button class="btn btn-danger" onClick={onClickHandler} value="0">Tab 1</button>
            <button class="btn btn-danger" onClick={onClickHandler} value="1">Tab 2</button>
            <button onClick={onClickHandler} value="2">Tab 3</button>
            {doDisplay==true ? <div><h3>{displaying.title}</h3><h5>{displaying.content}</h5></div> : true}
        </div>

    )
}

export default Tabs;