import {  faGavel, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'





const OnePresence = ({presence}) => {
  const [compte,setCompte] = useState({})
  const [user,setUser] = useState({})
    
  const navigate = useNavigate()
  const location = useLocation()
  const account = location.state.account

  const getUser = async () => {
    try {
      const user = await axios.get(`http://localhost:3010/api/utilisateur/getOne/${presence.UtilisateurId}`)
      setUser(user.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getCompte = async () => {
    try {
      const compte = await axios.get(`http://localhost:3010/api/comptes/getOne/${presence.CompteId}`)
      setCompte(compte.data)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getUser()
    getCompte()
  },[])



  return (
    <div className='one-filiale'>
    <p>Name : {user.name}</p>
    <p>role : {compte.role}</p>
</div>
  )
}

export default OnePresence