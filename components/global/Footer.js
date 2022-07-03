/**
 * 
 * Title: Footer page
 * Description: Footer will contain various thing like small description about
 *              the organization, latest news and contact form
 * 
 * Author: Musiur Alam Opu (Jr. Software Engr. at Avalon Hosting Services Ltd.)
 * Date: 1/27/2022
 * 
 */



//dependencies
import { useEffect, useState } from "react";
import FooterStyle from "../../styles/modules/footer.module.scss";

//initial form data
const InitialFormData = { full_name: "", email: "", message: "" };


//main function
const Footer = () => {

    //form data managin state
    const [formData, setFormData] = useState(InitialFormData);
    const [errorMessage, setErrorMessage] = useState(formData);

    //form data adder to state
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    //validation checking after submission
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(validator(formData));
    }

    //checking errors
    useEffect(() => {
        if (Object.keys(errorMessage).length === 0) {
            //api calling
            console.log("No error found!")
        } else {
            console.log(errorMessage);
        }
    }, [errorMessage])

    return (
        <div className={FooterStyle.mainDiv}>

            {/* logo and organization description section  */}
            <div className={FooterStyle.firstDiv}>
                <div>ABIAN
                    <span >FUND</span>
                </div>
                <p>Officia velit eu consectetur nulla. Aute commodo ea aute nulla ea cillum irure duis tempor. Dolore est irure magna anim ad ullamco tempor ut. Duis dolore quis velit et est adipisicing occaecat labore qui in Lorem.</p>
            </div>

            {/* Organization features section  */}
            <div className={FooterStyle.orgDiv}>
                <p>Organization</p>
                <ul>
                    <li>About us</li>
                    <li>Causes</li>
                    <li>Events</li>
                    <li>Legal Policies</li>
                    <li>FAQ</li>
                </ul>
            </div>

            {/* news updates section  */}
            <div className={FooterStyle.newsDiv}>
                <p className={FooterStyle.newsHeader}>Latest news</p>
                <ul>
                    <li>
                        <p>Dolore est irure magna anim ad ullamco</p>
                        <span>12th March 9999</span>
                    </li>
                    <li>
                        <p>Dolore est irure magna anim ad ullamco</p>
                        <span>12th March 9999</span>
                    </li>
                    <li>
                        <p>Dolore est irure magna anim ad ullamco</p>
                        <span>12th March 9999</span>
                    </li>
                </ul>
            </div>

            {/* contact us form section  */}
            <div className={FooterStyle.contactUsDiv}>
                <p>Contact us</p>
                <form>
                    <div>
                        <input name="full_name" type="text" placeholder="Your full name" onChange={handleOnChange} />
                    </div>
                    <div>
                        <input name="email" type="email" placeholder="Your email address" onChange={handleOnChange} />
                    </div>
                    <div>
                        <input name="message" type="textarea" placeholder="Your message" onChange={handleOnChange} />
                    </div>

                    <button className="btn-primary" onClick={handleOnSubmit}>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Footer;


//validator function for contact form
const validator = (data) => {

    //error object
    let err = {};

    //email validation
    if (!data.email.trim()) {
        err.email = "Email is required!";
    }

    //name validation
    if (!data.full_name.trim()) {
        err.full_name = "Full name is required!"
    }

    //message validation
    if (!data.message.trim()) {
        err.message = "Message is required!"
    }

    return err;
}