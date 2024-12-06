import React from 'react'

function JsxExpRule2() {
    const expRule2 = "We cannot write conditional statement in jsx expression expect ternary operator and short circuite operator."
    let mode = "dark";
    return (
        <div>
            Jsx Expression Rule 2 - {expRule2}
            {/* This is not allowed */}
            {/* {if(mode == "dark"){
                return (
                    <p>☀️</p>
                )
            }else{
                return(
                    <p>🌑</p>
                )
            }} */}

            {/* we have to use ternary operator */}

            {(mode == "dark") ? <p>☀️</p> : <p>🌑</p>}
        </div>
    )
}

export default JsxExpRule2
