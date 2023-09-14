import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home_admin from './Home_admin.jsx';
import Home_user from './Home_user.jsx';
import Owner from './Owner.jsx';
import Navbar from './Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import './index.css'

const test = 1;
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

function Home() {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState(mockEmployees);

  //refactor
  const isUser = sector === "user";
  const isAdmin = sector === "admin";

  const getHeaderText = () => {
    if (isUser) return "Home - User Sector";
    if (isAdmin) return "Home - Admin Sector";
    return "React - Assessment";
  };
  //ถ้าฟังก์ชั่น return ค่าเดียวไม่ต้องใส่ปีกกาก็ได้

  return (
    <div className="home-normal">
      <Navbar />
      <h1>
        Generation Thailand <br />
        {getHeaderText()}
      </h1>
      <div className="sector">
        <div className="button">
          <button onClick={() => {setSector("user");}}>User Home Sector</button>
          <button onClick={() => {setSector("admin");}}>Admin Home Sector</button>
        </div>
      </div>

      {isAdmin && <Home_admin employees={employees} setEmployees={setEmployees} />}
      {isUser && <Home_user employees={employees} />}
    </div>
  );
}




export default Home
