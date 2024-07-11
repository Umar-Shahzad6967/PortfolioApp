import React, { useEffect, useRef } from 'react'
import "./Expence.css"
import Typed from 'typed.js'
import About from '../About/About'
import Services from '../Services/Services'



function Expence() {
    const typedRef = useRef()
    useEffect(() => {
        const options = {
            strings: [
                " Junior React JS  Developer",
                "Junior Mern Stact Developer",
                "Junior Front End Developer"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,

            onStart: () => {
                navigator.vibrate(0); // Stop vibration
            }
        }
        const typed = new Typed(typedRef.current, options)
        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <>
            <div className="container-fluid" id='Expence'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='expence'>
                            <div className="content">
                                <div className="content">
                                    <h1>Hello,</h1>
                                    <h2  > I'm M.Umar Shahzad,</h2>
                                    <h3 style={{ color: "#dc965a" }} ref={typedRef}></h3>
                                    {/* <a href="/images/Mern-SEO-WORDPRESS.pdf" className='btn btn-outline-warning'>Download Resume</a> */}
                                    <a href="#About" className='btn btn-outline-warning'>Who I Am</a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Expence