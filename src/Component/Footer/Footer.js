import React from "react";
import "./Footer.css"
import { BiArrowToTop } from "react-icons/bi";
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

const SocialShare = [
    { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muhammad-umar-shahzad-8819002b7/" },
    { Social: <FaGithub />, link: "https://github.com/Umar-Shahzad6967?tab=repositories" },
];

const Footer = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-6 my-2">
                    <div className="nav justify-content-center text-center text-md-left justify-content-md-start " id="footer">
                        {SocialShare.map((val, i) => (
                            <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                                {val.Social}
                            </a>
                        ))}
                    </div>
                    {/* End .nav */}
                </div>
                {/* End .col */}

                <div className="col-md-6 my-2 text-center text-md-right text-white">
                    <p>
                        © {new Date().getFullYear()} copyright{" "}

                        all right reserved
                        <a href="#Expence" className="text-white fs-4"><BiArrowToTop /></a>

                    </p>
                </div>
                {/* End .col */}
            </div>
            {/* End .row */}
        </>
    );
};

export default Footer;
