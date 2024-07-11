import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react';
function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav id='top' className={`navbar navbar-expand-lg fixed-top ${sticky
                ? "sticky-navbar shadow-md bg-green duration-300 transition-all ease-in-out"
                : ""
                } `}
            >
                <div className="container-fluid">
                    <a href="#Expence" className="navbar-brand" id='logo'>
                        <span style={{ color: "#dc965a" }}>PORT</span>FOLIO
                    </a>

                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <span style={{ color: "#dc965a", fontWeight: "bold", }}>PORT</span>FOLIO
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1">
                                <li className="nav-item">
                                    <a href="#Expence" className="nav-link mx-lg-2 fs-4" aria-current="page">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Services" className="nav-link mx-lg-2 fs-4">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Edu" className="nav-link mx-lg-2 fs-4">
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#About" className="nav-link mx-lg-2 fs-4">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link mx-lg-2 fs-4">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar