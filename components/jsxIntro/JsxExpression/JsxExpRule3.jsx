import React, { Fragment } from 'react'

function JsxExpRule3() {
    let nums = [1, 214, 34, 4, 7]
    const rule3 = "We cannot use all looping statements inside jsx expression. We can use only the higher order functions, but all hof are also not useful, Only those hof are useful that can return the jsx."
    return (
        <div>
            <p>{rule3}</p>
            <p>Ex: </p>
            <p>Numbers are {nums.map((val, i) => {
                //instead of creating new elements we go with fragments
                return <Fragment key={i}>{val + " "}</Fragment>
            })}</p>

            <p>Numbers are {nums.filter((val, i) => {
                //instead of creating new elements we go with fragments
                return val > 10 && <Fragment key={i}>{val + " "}</Fragment>
            })}</p>
        </div>
    )
}

export default JsxExpRule3