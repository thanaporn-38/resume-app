import React from 'react';
import Header from './components/Header'; // แก้ไขเส้นทางให้ถูกต้อง
import AboutMe from './components/AboutMe';
import AttendTraining from './components/AttendTraining';
import Project from './components/Project';
import Sidebar from './components/Sidebar';
import References from './components/References';
import './App.css'; // Import ไฟล์ CSS สำหรับการจัดสไตล์

const App = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <Header />
        <AboutMe />
        <AttendTraining />
        <Project />
        <References />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
