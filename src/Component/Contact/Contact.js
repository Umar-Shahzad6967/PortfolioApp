import React from 'react';
import './Contact.css'
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";


function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "293a4193-5c32-4b09-94b1-461938f934da");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Send Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className="containe-fluid mt-4" id='contact'>
            <div className="row">
                <div className="col-lg-6 col-md-12 ">
                    <section className="contact justify-content-center" id="contact">
                        <h2 className="heading  ">
                            Contact Me!
                        </h2>
                        <form onSubmit={onSubmit}>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    className="p-2 "
                                    required
                                />

                            </div>
                            <div className="input-box">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="p-2"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Email Subject"
                                    className="mt-2 "
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                cols={30}
                                rows={10}
                                placeholder="Your Message"
                                className="mt-2"
                                required
                            />
                            <input type="submit" value="Send Message" className="btn mt-2" />
                        </form>
                        <span className='span1'>{result}</span>
                    </section>


                </div>
                <div className="col-lg-6 col-md-12 text-white p-4 mt-4">
                    <h1 >Get In touch!</h1>
                    <div className="content-contact ">
                        <p>Always available for work if the right project comes along,<br /> Feel free to contact me.</p>
                        <ul>
                            <li><FaLocationPin /> Faisalabad</li>
                            <li><MdEmail /> umarsarwar426@gmail.com</li>
                            <li><FaPhoneSquareAlt /> 03453506967</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
