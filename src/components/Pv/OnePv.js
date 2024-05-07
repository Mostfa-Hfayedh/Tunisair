import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import UpdatePv from './UpdatePv'
import DeletePv from './DeletePv'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const OnePv = ({reload,setReload,pv}) => {
    const [openUpdate,setOpenUpdate] = useState(false)
    const [openDelete,setOpenDelete] = useState(false)
    const [reunion,setReunion] = useState({})
    const location = useLocation()
    const account = location.state.account
  
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
  
    const handleOpenUpdate = () => setOpenUpdate(true);
    const handleCloseUpdate = () => setOpenUpdate(false);

    const getReunion = async () => {
      try {
        const reunion = await axios.get(`http://localhost:3010/api/reunion/getOne/${pv.ReunionId}`)
        setReunion(reunion.data)
      } catch (error) {
        console.log(error);
      }
    }
    const formatDate = (dateString) => {
      const date = new Date(dateString);
  
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDay = day < 10 ? "0" + day : day;
      const formattedMonth = month < 10 ? "0" + month : month;
  
      const formattedDate = formattedDay + "/" + formattedMonth + "/" + year;
  
      return formattedDate;
    };
  
    
  useEffect(()=>{
    getReunion()
  },[])
    

  return (
    <div className='one-filiale'>
        <p>Name : {reunion.name}</p>
        <UpdatePv  handleClose={handleCloseUpdate} open={openUpdate}  reload={reload} setReload={setReload} pv={pv} />
        <p>Date : {formatDate(reunion?.date)}</p>
        <DeletePv handleClose={handleCloseDelete} open={openDelete} reload={reload} setReload={setReload} pv={pv}/>
          
        <div className='one-filiale-buttons'>
            <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
            <FontAwesomeIcon icon={faEdit} className='one-filiale-icons' onClick={handleOpenUpdate}/>
        </div>
    </div>
  )
}

export default OnePv