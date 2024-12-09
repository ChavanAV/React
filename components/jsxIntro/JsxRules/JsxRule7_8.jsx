import React from 'react'

function JsxRule7_8() {
    const rule7 = 'We can return only one element without taking parentheses but the returned element must be t the same line of return keyword, if we want to return more than one element then it is mandatory to use parenthesis.'
    const rule8 = 'We can call the component by writing it in paired tag, and component name should be in upper case, we can’t write html tags in upper case as component name.'
    return (
        <div>
            Jsx Rule 7 = {rule7}
            <br />
            Jsx Rule 7 = {rule8}
        </div>
    )
}


export default JsxRule7_8
