import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'

const OneUser = ({reload ,setReload , user}) => {
    const [openUpdate,setOpenUpdate] = useState(false)
    const [openDelete,setOpenDelete] = useState(false)
  
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
  
    const handleOpenUpdate = () => setOpenUpdate(true);
    const handleCloseUpdate = () => setOpenUpdate(false);
  return (
    <div className='one-filiale'>
        <div className='one-user-image'>
          <img src={user.photo} alt='' />
        </div>
        <p>Nom : {user.name} </p>
        <UpdateUser  handleClose={handleCloseUpdate} open={openUpdate}  reload={reload} setReload={setReload} user={user}/>
        <p>Matricule : {user.matricule}</p>
        <DeleteUser handleClose={handleCloseDelete} open={openDelete} reload={reload} setReload={setReload} user={user}/>
        <div className='one-filiale-buttons'>
            <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
            <FontAwesomeIcon icon={faEdit} className='one-filiale-icons' onClick={handleOpenUpdate}/>
        </div>
    </div>
  )
}

export default OneUser