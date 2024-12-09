import React from 'react'

function JsxExpRule2() {
    const expRule2 = "We cannot write conditional statement in jsx expression expect ternary operator and short circuite operator."
    let mode = "dark";
    let api = {}
    let un = "abc"
    let pass = "123"
    let ph = '1234567890'
    return (
        <div>

            Jsx Expression Rule 2 - {expRule2}
            <br />

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

            {/* we have to use ternary operator and short circuit*/}

            {(mode == "dark") ? <p>☀️</p> : <p>🌑</p>}

            {/* Short circuit operator: */}
            {mode == 'dark' && <p>☀️</p>}

            {/* eg : for short circuit && oparator:- if 1st statement is true thenonly second statement will be checked. */}
            {
                // Array.isArray(api) && api.map(val => {
                //     return val;
                // })
            }

            {
                (un == "abc" && pass == "123" && "Welcome user")
            }

        </div>
    )
}

export default JsxExpRule2