import {  faGavel, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DeleteOrdre from './DeleteOrdre'
import Vote from './Vote'
const OneOrdre = ({reload,setReload,ordre,reunion}) => {
  const [openDelete,setOpenDelete] = useState(false)
  const [openVote,setOpenVote] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const account = location.state.account

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenVote = () => setOpenVote(true);
  const handleCloseVote = () => setOpenVote(false);

  function dateDiffInDays(date1, date2) {
    // Convert both dates to milliseconds
    const date1MS = date1.getTime();
    const date2MS = date2.getTime();
  
    // Calculate the difference in milliseconds
    const differenceMS =(date1MS - date2MS);
  
    // Convert the difference to days
    const differenceDays = Math.ceil(differenceMS / (1000 * 60 * 60 * 24));
    console.log(differenceDays);
    return differenceDays;
    }


  return (
    <div className='one-filiale'>
        <p>Name : {ordre.Num}</p>
        <p>Nature : {ordre.Nature}</p>
        <p>Type d'action : {ordre.TypeDaction}</p>
        <DeleteOrdre handleClose={handleCloseDelete} open={openDelete} reload={reload} setReload={setReload} ordre={ordre}/>
        <Vote handleClose={handleCloseVote} open={openVote} ordre={ordre}  />
        <div className='one-filiale-buttons'>
            {
              account.role === 'Sécrétaire' ?
              <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
              : null
            }
            {
            account.role !== 'Sécrétaire' && dateDiffInDays(new Date(reunion?.date),new Date()) === 0?
              <FontAwesomeIcon icon={faGavel} className='one-filiale-icons' onClick={handleOpenVote} />
              : null
            }
            
        </div>
    </div>
  )
}

export default OneOrdre