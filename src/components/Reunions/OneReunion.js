import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import UpdateReunion from './UpdateReunion'
import DeleteReunion from './DeleteReunion'
import { useLocation, useNavigate } from 'react-router-dom'

const OneReunion = ({reload,setReload,reunion}) => {
  const [openUpdate,setOpenUpdate] = useState(false)
  const [openDelete,setOpenDelete] = useState(false)
  const [date,setDate] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const account = location.state.account

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);

  const formatDateToYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    
    return formattedDate;
}

function dateDiffInDays(date1, date2) {
  // Convert both dates to milliseconds
  const date1MS = date1.getTime();
  const date2MS = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceMS =(date1MS - date2MS);

  // Convert the difference to days
  const differenceDays = Math.ceil(differenceMS / (1000 * 60 * 60 * 24));
  return differenceDays;
  }
  useEffect(()=>{
    setDate(formatDateToYYMMDD(new Date()))
  },[])


  return (
    <div className='one-filiale'>
        <p>Name : {reunion.name}</p>
        <UpdateReunion  handleClose={handleCloseUpdate} open={openUpdate}  reload={reload} setReload={setReload} reunion={reunion} />
        <p>Date : {reunion.date.substring(0,10)}</p>
        <p>Type : {reunion.type} </p>
        <p>Etat : {reunion.etat} </p>
        <DeleteReunion handleClose={handleCloseDelete} open={openDelete} reload={reload} setReload={setReload} reunion={reunion}/>
          {
            dateDiffInDays(new Date(reunion.date),new Date(date)) >= 0  && reunion.etat !== "Annulé" && reunion.etat !== "Terminé"? 
            <p className='visitButton' onClick={(e)=>{
              e.preventDefault();
              navigate(`/secretaireDash/reunionPlat`,{ state: { account: account , reunion : reunion} })
            }}>Visiter</p> : <></>
          }
        <div className='one-filiale-buttons'>
            <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete}/>
            <FontAwesomeIcon icon={faEdit} className='one-filiale-icons' onClick={handleOpenUpdate}/>
        </div>
    </div>
  )
}

export default OneReunion