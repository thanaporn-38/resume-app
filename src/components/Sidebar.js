import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
      <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" className="profile-pic" />
        <ul className="contact-info">
          <li>📞 0643234912</li>
          <li>✉️ thanapornchai2402@gmail.com</li>
          <li>📍 153 Moo 1, Tan Diao, Lom Sak, Phetchabun 67110</li>
        </ul>
      </div>
      
      <section className="education">
        <h3>EDUCATION</h3>
        <p>Naresuan University<br/>Bachelor of Computer Science<br/>2021 - Present</p>
      </section>

      <section className="skills">
        <h3>SKILLS</h3>
        <ul>
          <li><b>Programming languages</b>: Python, Java, PHP, C++</li>
          <li><b>Web Development</b>: HTML, CSS, Java</li>
          <li><b>Database Management</b>: MySQL</li>
          <li><b>Operating Systems</b>: Windows, Linux</li>
          <li><b>Cloud Platform</b>: Azure</li>
        </ul>
      </section>
      <section className="softskills">
        <h3>SOFT SKILLS</h3>
        <ul>
          <li><b>Communication</b></li>
          <li><b>Teamwork</b></li>
          <li><b>Adaptibillity</b></li>
        </ul>
      </section>
      <section className="interest">
        <h3>INTERSET</h3>
        <ul>
          <li><b>Data Analyst</b></li>
          <li><b>Aetificial Inteligence</b></li>
          <li><b>App Develop</b></li>
          <li><b>Webdevelop</b></li>
          <li><b>Programer</b></li>
          <li><b>Cloud Computing</b></li>
        </ul>
        </section>
        <section className="language">
        <h3>INTERSET</h3>
        <ul>
        <li><b>Thai</b>: Native</li>
        <li><b>English</b>: Beginner</li>
        </ul>
        </section>
        
      
    </aside>
  );
};

export default Sidebar;
