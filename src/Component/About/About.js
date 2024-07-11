import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container" id='About'>
            <div className="row">
                <div className="col-lg-6 col-md-12 order-lg-1 order-2"
                    data-aos="fade-right"
                    data-aos-duration='1000'>
                    <div className='content-about ' style={{ paddingTop: "100px" }}>
                        <h1>Muhammad Umar Shahzad</h1>
                        <h4>A Junior <span className="highlight">Web/Mobile Developer</span> based in <span className="highlight">Gamica Cloud</span></h4>
                        <p>I am a 1+ years experienced Full Stack Developer with a passion for problem-solving and building efficient, scalable, and maintainable web applications. I have expertise in JavaScript, and am proficient in both front-end and back-end development. I have worked with popular frameworks and libraries like React, Node.js, and MongoDB.</p>
                        <a href="/Mern-SEO-WORDPRESS.pdf" className='btn btn-outline-warning' download="Resume_Mern-SE0-WORDPRESS.pdf">Download Resume</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 order-lg-2 order-1"
                    data-aos="flip-right"
                    data-aos-duration='1000'>
                    <div className="img-container mt-4 img-fluid">
                        <img src="/images/pic.jpeg" alt="Muhammad Umar Shahzad" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
