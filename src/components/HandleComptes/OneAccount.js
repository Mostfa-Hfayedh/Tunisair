import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UpdateCompte from './UpdateCompte'
import DeleteCompte from './DeleteCompte'

const OneAccount = ({reload , setReload , compte}) => {
    const [openUpdate,setOpenUpdate] = useState(false)
    const [openDelete,setOpenDelete] = useState(false)
    const [filiale,setFiliale] = useState({})
    const [utilisateur,setUtilisateur] = useState({})

    const handleDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3010/api/filiale/getOne/${compte.FilialeId}`)
            setFiliale(response.data)
            console.log(response.data);
      
            console.log(compte.UtilisateurId);
            const user = await axios.get(`http://localhost:3010/api/utilisateur/getOne/${compte.UtilisateurId}`)
            setUtilisateur(user.data)
            console.log(user.data);
        } catch (error) {
            console.log(error);
        }
    }
  
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
  
    const handleOpenUpdate = () => setOpenUpdate(true);
    const handleCloseUpdate = () => setOpenUpdate(false);



    useEffect(()=>{
        handleDetails()
    },[])



  return (
    <div className='one-filiale'>
        <p>Utilisateur :  {utilisateur?.name}</p>
        <UpdateCompte  handleClose={handleCloseUpdate} open={openUpdate}  reload={reload} setReload={setReload} compte={compte} />
        <p>Filiale : {filiale?.denomination}</p>
        <p>Role : {compte.role}</p>
        <DeleteCompte handleClose={handleCloseDelete} open={openDelete} reload={reload} setReload={setReload} compte={compte}/>
        <div className='one-filiale-buttons'>
            <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
            <FontAwesomeIcon icon={faEdit} className='one-filiale-icons' onClick={handleOpenUpdate}/>
        </div>
    </div>
  )
}

export default OneAccount