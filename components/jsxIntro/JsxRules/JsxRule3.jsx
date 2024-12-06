import React from 'react'

function JsxRule3() {
    var rule3 = "While writing jsx code each and every jsx element must be close."

    // It will work beacuase we are closing the jsx elements
    return (
        <div>
            JsxRule3 - {rule3}
            {/* <br />
            <hr />
            <img src="" alt="" />
            <input type="text" /> */}

        </div>
    )


    // It will not work beacuase we are not closing the jsx elements

    // return (
    //     <div>
    //         JsxRule3 - {rule3}
    //          <br>
    //          <hr>
    //         <img>
    //          <input>
    //     </div>
    // )
}

export default JsxRule3
