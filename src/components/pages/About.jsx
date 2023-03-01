import React from "react";
import profile from "../../images/profile.jpg";

export default function About() {
    return (
        <div className="container">
            <h2>About Me</h2>
            <div className="row">
                <div className="col-6">
                    <p>Hello, I am Travontaz/Taz Lowry. I am a Full-Stack Web Developer looking forward to facing challenges. I hope to grow in this new role and have fun doing something that I love. Please check out the projects that I have highlighted here in my portfolio. Do not hesitate to reach out if you would like to connect.</p>
                </div>
                <div className="col-4">
                    <img src={profile} alt="Taz Lowry" className="profile-picture" />
                </div>
            </div>
        </div>
    )
}