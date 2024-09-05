import React from 'react';
import './resume.css'; // Create and import your CSS file for custom styles

const Resume = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-4 text-center">
                    <h1>THANAPORN CHAICHALERMSAK</h1>
                    <p>Senior Computer Science Student</p>
                    <p>Phetchabun, Thailand</p>
                    <p>064-323-4912</p>
                    <p>thanapornchai2402@gmail.com</p>
                </div>
                <div className="col-12 col-md-8">
                    <h2>About Me</h2>
                    <p>
                        I am a senior Computer Science student at Naresuan University with skills in Python, Java, C++, HTML, CSS, JavaScript, and SQL. 
                        I have experience in system analysis, software development, AI, and Azure, along with studies in Data Science.
                    </p>
                    <h2>Education</h2>
                    <p>Naresuan University (2021 - Present)</p>
                    <h2>Skills</h2>
                    <ul>
                        <li>Programming languages: Python, Java, PHP, C++</li>
                        <li>Web Development: HTML, CSS, JavaScript</li>
                        <li>Database Management: MySQL</li>
                        <li>Operating Systems: Windows, Linux</li>
                        <li>Cloud Platform: Azure</li>
                    </ul>
                    <h2>Projects</h2>
                    <ul>
                        <li>Thesis Project: Development of a Comprehensive Car Care Directory Website (Ongoing)</li>
                        <li>Online Bookstore Website Project (Internet Programming Course)</li>
                        <li>AI for Nature</li>
                    </ul>
                    <h2>Interests</h2>
                    <p>Data Analysis, Artificial Intelligence, App Development, Web Development, Cloud Computing</p>
                    <h2>Languages</h2>
                    <p>Thai: Native</p>
                    <p>English: Beginner</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
