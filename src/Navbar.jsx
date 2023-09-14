import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home.jsx';
import Home_admin from './Home_admin.jsx';
import Home_user from './Home_user.jsx';
import Owner from './Owner.jsx';

function Navbar() {
  return (
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/owner">Owner</Link>
        </li>
    </ul>
    
  )
}


export default Navbar