import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const OneInvitation = ({invitation}) => {
  const [reunion , setReunion] = useState({})
  const [date,setDate] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const account = location.state.account

  const getReunion = async () => {
    try {
      const response = await axios.get(`http://localhost:3010/api/reunion/getOne/${invitation.ReunionId}`)
      console.log(response.data);
      setReunion(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  const handleAddPresence = async (body) => {
    try {
      await axios.post('http://localhost:3010/api/presence/create',body)
    } catch (error) {
      console.log(error);
    }
  }

  
  const formatDateToYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    
    return formattedDate;
}


  useEffect(()=>{
    getReunion()
    setDate(formatDateToYYMMDD(new Date()))
  },[])


  return (
    <div className='one-filiale'>
        <p>Nom : {reunion.name}</p>
        <p>Date : {reunion?.date?.substring(0,10)}</p>
        {
            reunion?.date?.substring(0,10) === date ? 
            <p className='visitButton' onClick={(e)=>{
              e.preventDefault();
              navigate(`/actionnaireDash/reunionPlat`,{ state: { account: account , reunion : reunion} })
              handleAddPresence({

                ReunionId:invitation.ReunionId,
                CompteId : account.id,
                UtilisateurId : account.UtilisateurId

              })
            }}>Visiter</p> : <></>
          }

    </div>
  )
}

export default OneInvitation