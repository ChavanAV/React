
import "./css/mainDiv.css"
import MiddleDiv from "./MiddleDiv";

let MainDiv = () => {
    return (
        <div id="main-div">
            <div id="landing">LANDING PAGE</div>
            <div id="web">Webinar</div>
            <MiddleDiv />
        </div>
    )
}

export default MainDiv;