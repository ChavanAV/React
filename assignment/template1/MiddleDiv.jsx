import React from 'react';
import "./css/landing_page.css"
import "./css/middle-div.css"
import NavBar from "./NavBar"
import LeftBox from './LeftBox';
import MiddleBox from './MiddleBox';
import RightBox from './RightBox';

function MiddleDiv() {
    return (
        <div id="middle-div">
            <NavBar />
            <hr style={{ height: '2px', backgroundColor: 'black', border: 'none', width: '100%' }} />
            <div className="content">
                <LeftBox />
                <hr style={{ width: '2px', backgroundColor: 'black', border: 'none' }} />
                <MiddleBox />
                <hr style={{ width: '2px', backgroundColor: 'black', border: 'none' }}></hr>
                <RightBox />
            </div>
        </div>
    );

}

export default MiddleDiv;