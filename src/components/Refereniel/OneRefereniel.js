import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import DeleteRefereniel from './DeleteRefereniel'

const OneRefereniel = ({refereniel,reload,setReload}) => {

    const [openDelete,setOpenDelete] = useState(false)

    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
  

  return (
    <div className='one-filiale'>
        <p>Titre : </p>
        <p>Abréviation : </p>
        <DeleteRefereniel  handleClose={handleCloseDelete} open={openDelete} refereniel={refereniel} reload={reload} setReload={setReload}/>
        <div className='one-filiale-buttons'>
            <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
        </div>
    </div>
  )
}

export default OneRefereniel