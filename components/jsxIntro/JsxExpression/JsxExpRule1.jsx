import React from 'react'

function JsxExpRule1() {
    const expRule1 = "We cannot write console statement directly inside jsx expression because it will not displayed on UI."
    console.log("We cannot write console statement directly.");
    return (
        <div>
            {/* console.log("We cannot write console statement directly inside jsx expression because it will not displayed on UI."); */}
            Jsx Expression Rule 1 - {expRule1}
        </div>
    )
}

export default JsxExpRule1
