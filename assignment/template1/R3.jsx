
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./css/landing_page.css"

let R3 = () => {
    return (
        <div id="r3">
            <div>
                <FaInstagram id="faicon" size={40} />
                <FaWhatsapp id="faicon" size={40} />
            </div>
            <div >
                <FaFacebook id="faicon" size={40} />
                <FaTwitter id="faicon" size={40} />

            </div>
        </div>
    )
}

export default R3;