import {  faGavel, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'





const OnePresence = ({reload,setReload,presence}) => {
    
  const navigate = useNavigate()
  const location = useLocation()
  const account = location.state.account




  return (
    <div className='one-filiale'>
    <p>Name : pfffff</p>
    <p>role : admin</p>
    <div className='one-filiale-buttons'>
       
        
        
    </div>
</div>
  )
}

export default OnePresence