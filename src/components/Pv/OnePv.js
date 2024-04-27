import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import UpdatePv from './UpdatePv'
import DeletePv from './DeletePv'
import { useLocation, useNavigate } from 'react-router-dom'

const OnePv = ({reload,setReload,pv}) => {
    const [openUpdate,setOpenUpdate] = useState(false)
    const [openDelete,setOpenDelete] = useState(false)
    const [date,setDate] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const account = location.state.account
  
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
  
    const handleOpenUpdate = () => setOpenUpdate(true);
    const handleCloseUpdate = () => setOpenUpdate(false);
  
    
  
    

  return (
    <div className='one-filiale'>
        <p>Name : nnnnn</p>
        <UpdatePv  handleClose={handleCloseUpdate} open={openUpdate}  reload={reload} setReload={setReload} pv={pv} />
        <p>Date : 20/22</p>
        <DeletePv handleClose={handleCloseDelete} open={openDelete} reload={reload} setReload={setReload} pv={pv}/>
          
        <div className='one-filiale-buttons'>
            <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
            <FontAwesomeIcon icon={faEdit} className='one-filiale-icons' onClick={handleOpenUpdate}/>
        </div>
    </div>
  )
}

export default OnePv