


let JsxRule2 = () => {
    var rule2 = "We cannot return more than one jsx element at a time only one jsx element is allowed to be return, if we want to return more than one element then we have to wrap that elements into one single parent element and return";

    //It will work as we are returning only one element
    return (
        <div>
            JsxRule2 - {rule2}
        </div>
    )

    // It will not work beacuse we are returning more than one element

    // return (
    //     <div>
    //         JsxRule2 - {rule2}
    //     </div>
    //     <div>
    //     JsxRule2 - {rule2}
    //     </div>
    // )

}

export default JsxRule2;