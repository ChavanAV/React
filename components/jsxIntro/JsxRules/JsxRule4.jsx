import React from 'react'

function JsxRule4() {
    const rule4 = "We cannot use attributes like class and for while writing the jsx. Instead of that we have to use className and htmlFor";
    return (
        <div>
            {/* JsxRule4- {rule4} */}
            <p className=''>JsxRule4 - {rule4}</p>
            <label htmlFor="userName"></label>
        </div>
    )
}

export default JsxRule4
