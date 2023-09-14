import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home.jsx';
import Home_admin from './Home_admin.jsx';
import Owner from './Owner.jsx';
import Navbar from './Navbar.jsx'
import { useNavigate } from 'react-router-dom';

function Home_user(props) {
  const employees = props.employees;

  return (
    <>
      <div>
          <table className='table'>
              <tr>   
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
              </tr> 
              {employees.map((data) => (
                      <tr>
                          <td>{data.name}</td>
                          <td>{data.lastname}</td>
                          <td>{data.position}</td>
                      </tr>
                  ))}
          </table>
      </div>  
    </>
);
}

export default Home_user