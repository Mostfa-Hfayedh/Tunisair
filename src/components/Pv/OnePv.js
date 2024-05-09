import { faEdit, faEye, faFile, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import UpdatePv from './UpdatePv'
import DeletePv from './DeletePv'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ValidatePv from './ValidatePv'

const OnePv = ({reload,setReload,pv}) => {
    const [openUpdate,setOpenUpdate] = useState(false)
    const [openDelete,setOpenDelete] = useState(false)
    const [openValidate,setOpenValidate] = useState(false)
    const [reunion,setReunion] = useState({})
    const location = useLocation()
    const account = location.state.account
    const navigate = useNavigate()

    const handleOpenValidate = () => setOpenValidate(true);
    const handleCloseValidate = () => setOpenValidate(false);
  
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
        <UpdatePv  handleClose={handleCloseUpdate} open={openUpdate}  reload={reload} setReload={setReload} pv={pv} reunion={reunion} />
        <p>Date : {formatDate(reunion?.date)}</p>
        <DeletePv handleClose={handleCloseDelete} open={openDelete} reload={reload} setReload={setReload} pv={pv}/>
        {
          pv.valid ? <p style={{color : "green" , fontWeight : "500"}}>Validé</p> : <p style={{color : "#D40000" , fontWeight : "500"}}>non Validé</p>
        }
          <ValidatePv handleClose={handleCloseValidate} open={openValidate} reload={reload} setReload={setReload} pv={pv}/>
        {
          account.role === "Sécrétaire" && pv.valid === false ?
          <div className='one-filiale-buttons'>
          <FontAwesomeIcon icon={faTrash}  className='one-filiale-icons' onClick={handleOpenDelete} />
          <FontAwesomeIcon icon={faEdit} className='one-filiale-icons' onClick={handleOpenUpdate}/>
      </div> : account.role === "Sécrétaire" && pv.valid === true ? 
          <div className='one-filiale-buttons'>
          <FontAwesomeIcon icon={faFile}  className='one-filiale-icons' onClick={(e)=>{
            navigate('/imprimer' , {state : {reunion : reunion , pv : pv}}) 
          }} />
      </div>  : <></>
        }
        {
         account.role === "Administrateur"  ?
        <div className='one-filiale-buttons'>
         <FontAwesomeIcon icon={faEye}  className='one-filiale-icons' onClick={handleOpenValidate} />
         <FontAwesomeIcon icon={faFile}  className='one-filiale-icons' onClick={(e)=>{
            navigate('/imprimer' , {state : {reunion : reunion , pv : pv}})
         }} />
     </div> :
     <></>
        }
    </div>
  )
}

export default OnePv