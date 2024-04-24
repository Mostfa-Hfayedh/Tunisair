import React, { useEffect, useState } from 'react'
import SideNav from "../Side-NavBar/SideNav"
import "./gestion.css"
import axios from 'axios'
import { Outlet, useLocation } from 'react-router-dom'

const GestionnaireDash = () => {
  const [user,setUser] = useState({})
  const location = useLocation()
  const account = location.state.account

  const getUser = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.get(
        "http://localhost:3010/api/utilisateur/getOne",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(()=>{
    getUser()
    console.log(account);
  },[])

  return (
    <div className='dash'>  
        <SideNav account={account}/>
        <div className='content'>
            <Outlet />
        </div>
    </div>
  )
}

export default GestionnaireDash