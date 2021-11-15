import React, {useState} from 'react'

export default function About(props) {
    return (
        <>
        <div className="about-section my-4">
        <h1>About Us Page</h1>
        <p>A platform where you can manipulate your text.</p>
        </div>
        <h1 style={{textAlign:'center',color:'red'}}>Our Team</h1>
        <div className="row">
        <div className="column">
            <div className="card">
            {/* <img src="/w3images/team1.jpg" alt="Jane"/> */}
            <div className="container my-2">
                <h2>Shivam Srivastava</h2>
                <p className="title">CEO & Founder</p>
                <p>Software Engineer</p>
                <p>shivam.hbti05@gmail.com</p>
            </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
            {/* <img src="/w3images/team2.jpg" alt="Mike"/> */}
            <div className="container my-2">
                <h2>Mike Ross</h2>
                <p className="title">Platform Architect</p>
                <p>Software Engineer</p>
                <p>mike@adobe.com</p>
            </div>
            </div>
        </div>
        
        <div className="column">
            <div className="card">
            {/* <img src="/w3images/team3.jpg" alt="John"/> */}
            <div className="container my-2">
                <h2>John Doe</h2>
                <p className="title">Consultant</p>
                <p>Software Consultant</p>
                <p>john@adobe.com</p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
