import "./css/landing_page.css"
import Left_1 from "./Left_1";
import Left_2 from "./Left_2";
let LeftBox = () => {
    return (
        <div>
            <Left_1 Left_1 />
            <div id="line"></div>
            <Left_2 />
        </div>
    );
}

export default LeftBox;