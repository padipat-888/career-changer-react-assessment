import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home.jsx';
import Home_admin from './Home_admin.jsx';
import Home_user from './Home_user.jsx';
import Owner from './Owner.jsx';

function Navbar() {
  return (
    <>
      <div className='topnav'>
        <a href="/">Home</a>
        <a href="/owner">Owner</a>
      </div>
    </>
  )
}


export default Navbar