import React from 'react'
import './Edu.css'

const skills = [
    {
        name: "HTML",
        width: "95%"
    }, {
        name: "CSS",
        width: "90%"
    }, {
        name: "JS",
        width: "80%"
    },
    {
        name: "React JS",
        width: "85%"
    },
    {
        name: "NODE JS",
        width: "80%"
    }, {
        name: "Express",
        width: "85%"
    }, {
        name: "RESTFUL API",
        width: "85%"
    }, {
        name: "MONGODB",
        width: "85%"
    },
    {
        name: "REDUX-TOOLKIT",
        width: "80%"
    },
    {
        name: "CONTEX.API",
        width: "90%"
    },
    {
        name: "SEO",
        width: "90%"
    },
    {
        name: "JWT",
        width: "85%"
    },


]

function Edu() {
    return (
        <>
            <div className="conatiner" >
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='edu-title' id='Edu'>Education and Skills</h1>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-lg-4" id='education'>
                        <h2 className='edu-title'>Education</h2>
                        <div className="edu-card">
                            <div className="edu-content">
                                <ul className="aducation-box ">
                                    <li>

                                        <span className="dark-bg">2019 - 2023</span>
                                        <h6>GUCF</h6>
                                        <p>Bachelor of Information Technology</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 " >
                        <h2 className='edu-title'>My Skills</h2>
                        {skills.map((val, i) => (
                            <div key={i} className="skill" style={{ marginTop: "8px" }}>
                                <h5 style={{ color: "white" }}>{val.name}</h5>
                                <div className="skill-bar">
                                    <div class="progress">
                                        <div className="progress-bra progress-bar-striped " style={{ width: val.width }} id='bar'>
                                            <span style={{ color: "black", fontWeight: "bold", paddingLeft: "5px" }}>{val.width}</span> </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Edu