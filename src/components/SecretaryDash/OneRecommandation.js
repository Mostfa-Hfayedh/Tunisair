import {  faGavel, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReadRecommandation from './ReadRecommandation'



const OneRecommandation = ({recommandation}) => {
    const [openRead,setOpenRead] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const account = location.state.account
    
    const handleOpenRead = () => setOpenRead(true);
    const handleCloseRead = () => setOpenRead(false);

  return (
    <div className='one-filiale'  style={{cursor : 'pointer'}} onClick={(e)=>{
      e.preventDefault();
      handleOpenRead();
    }} >
    <p>Contenu : {recommandation.description.substring(0,10)+"..."}</p>
    <ReadRecommandation  open={openRead} handleClose={handleCloseRead} recommandation={recommandation} /> 
</div>
  )
}

export default OneRecommandation