import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="freshbooks-logo.svg" width={150} height={50} className="d-inline-block align-top " alt />
                </a>

                <Link to={'/'}>
                    Navbar
                </Link>
                {/* <a classname="navbar-brand" href="#">
                    Navbar
                    <span>
                        <img
                            src="arrow.png"
                            alt="Brand Logo"
                            style={{ width: 10, height: 10, marginLeft: 10 }}
                        />
                    </span>
                </a> */}



            </nav>





        </>
    )
}

export default Home