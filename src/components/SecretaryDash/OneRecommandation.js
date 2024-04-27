import {  faGavel, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const OneRecommandation = ({reload,setReload,recommandation}) => {
    const [openDelete,setOpenDelete] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const account = location.state.account
    
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

  return (
    <div className='one-filiale'>
    <p>Name : aziz</p>
    <p>commantaire : blablabla  </p>
    
    <div className='one-filiale-buttons'>
        {
          account.role === 'Sécrétaire' ?
          <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
          : null
        }
      
        
    </div>
</div>
  )
}

export default OneRecommandation