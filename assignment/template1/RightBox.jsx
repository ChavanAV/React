
import "./css/landing_page.css"
import R1 from "./R1";
import R2 from "./R2";
import R3 from "./R3";

let RightBox = () => {
    return (
        <div>
            <R1 />
            <div id="line"></div>
            <R2 />
            <div id="line"></div>
            <R3 />
        </div>
    )
}

export default RightBox;