import React from 'react'

function JsxRule5() {
    const rule5 = `React Fragments-
        -	React Fragments are simply a pair of empty angular braces.
        -	By using react fragment we avoid the creation of extra nodes.
        -	As we are not creating extra nodes it will increase the performance.
        -   We can write react fragment in three ways:
            1.	By using empty angular beaces
            2.	By using React.Fragment
            3.  By Using Fragment  but this we need to import Fragment from React    
    `
    //1st way - As Angular Braces
    return (
        <>
            JsxRule5 - <pre>{rule5}</pre>
        </>
    )

    //2nd way - As React.Fragment
    // return(
    //     <React.Fragment>
    //        JsxRule5 - {rule5} 
    //     </React.Fragment>
    // )

    //3rd way - As Fragment only but this we need to import Fragment from React
    // return(
    //     <Fragment>
    //        JsxRule5 - {rule5} 
    //     </Fragment>
    // )
}

export default JsxRule5
