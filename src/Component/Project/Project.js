import React, { useState } from 'react';
import './Project.css';

const ServiceContent = [
    {
        image: "img/portfolio//Quizz1.jpg",
        title: "Quizz app ",
        link: "https://quizz-app-pied.vercel.app/"
    },
    {
        image: "img/portfolio/1.jpg",
        title: "Authentication",
        link: "https://quizz-app-pied.vercel.app/"

    },
    {
        image: "img/portfolio/1.jpg",
        title: "Crud app ",
        link: "https://quizz-app-pied.vercel.app/"

    },

];

function Project() {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <>
            <div className="services-container" id="Services">
                <div className="row" id="row">
                    <div className="col-lg-12">
                        <h1 className='title'>My Projects</h1>
                    </div>
                    {ServiceContent.slice(0, visibleCount).map((val, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                            <div className="card" style={{ width: '30rem' }}>
                                <img src={val.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href={val.link} className="btn btn-primary mx-auto " target='blank'>VIEW</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < ServiceContent.length && (
                    <div className="col-lg-12 text-center">
                        <button className="btn btn-primary mt-4" onClick={handleLoadMore}>Load More</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Project;
