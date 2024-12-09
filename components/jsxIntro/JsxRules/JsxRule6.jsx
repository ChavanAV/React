import React from 'react'
import JsxExpRule1 from '../JsxExpression/JsxExpRule1';
import JsxExpRule2 from '../JsxExpression/JsxExpRule2';
import JsxExpRule3 from '../JsxExpression/JsxExpRule3';

function JsxRule6() {
    let jsxRule6 = "We can write any java script in component directly by using jsx expression. ";
    return (
        <div>
            JSX Rule 6 - {jsxRule6}
            <JsxExpRule1 />
            <JsxExpRule2 />
            <JsxExpRule3 />
        </div>
    )
}

export default JsxRule6
