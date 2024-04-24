import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import UpdateFiliale from './UpdateFiliale'
import DeleteFiliale from './DeleteFiliale'

const OneFiliale = ({filiale , reload , setReload}) => {
  const [openUpdate,setOpenUpdate] = useState(false)
  const [openDelete,setOpenDelete] = useState(false)

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);

  return (
    <div className='one-filiale'>
        <p>Denomination : {filiale.denomination}</p>
        <UpdateFiliale  handleClose={handleCloseUpdate} open={openUpdate} filiale={filiale} reload={reload} setReload={setReload} />
        <p>Abréviation : {filiale.abreviation}</p>
        <p>Type : {filiale.type}</p>
        <DeleteFiliale  handleClose={handleCloseDelete} open={openDelete} filiale={filiale} reload={reload} setReload={setReload}/>
        <div className='one-filiale-buttons'>
            <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
            <FontAwesomeIcon icon={faEdit} className='one-filiale-icons' onClick={handleOpenUpdate}/>
        </div>
    </div>
  )
}

export default OneFiliale