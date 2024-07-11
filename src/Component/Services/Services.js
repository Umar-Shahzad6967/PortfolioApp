import React from 'react';
import './Services.css';

const ServiceContent = [
    {
        no: "01",
        service: "FULL STACK DEVELOPMENT",
        desc: `Transform the client's idea into a full-featured website 
               that works on all supported devices and screen sizes.`,
    },
    {
        no: "02",
        service: " WEB MOBILE DEVELOPMENT",
        desc: `Develop well-designed and functional apps to help businesses 
               and individuals achieve their goals with mobile technology.`,
    },
    {
        no: "03",
        service: "FRONTEND  DEVELOPMENT",
        desc: `Elevate the digital product with expert UI design services`
    },
];

function Services() {
    return (
        <div className="services-container" id="Services">
            <div className="row" id="row">
                <div className="col-lg-12">
                    <h1 className='title'>My Services</h1>
                </div>
                {ServiceContent.map((val, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                        <div className='cardd'>
                            <div className="card-content">
                                <h3 className='card-no'>{val.no}</h3>
                                <h2 className='card-title'>{val.service}</h2>
                                <p className='card-paragraph'>{val.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
