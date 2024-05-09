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


  const navigation = () => {
    return account.role === "Gestionnaire" ? "gestionnaireDash/reunionPlat" : account.role === "Actionnaire" ? "actionnaireDash/reunionPlat" : account.role === "Décideur" ? "decideurDash/reunionPlat" : account.role === "Administrateur" ? "adminDash/reunionPlat" : account.role === "Sécrétaire" ? "secretaireDash/reunionPlat" : ""
  }

  const getReunion = async () => {
    try {
      const response = await axios.get(`http://localhost:3010/api/reunion/getOne/${invitation.ReunionId}`)
      setReunion(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  const handleAddPresence = async () => {
    try {
      if(dateDiffInDays(new Date(reunion?.date),new Date()) === 0){
        await axios.put(`http://localhost:3010/api/invitation/update/${invitation.id}`,{
          presence : true
        })
      }
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
function dateDiffInDays(date1, date2) {
  // Convert both dates to milliseconds
  console.log(date1);
  const date1MS = date1.getTime();
  const date2MS = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceMS =(date1MS - date2MS);

  // Convert the difference to days
  const differenceDays = Math.ceil(differenceMS / (1000 * 60 * 60 * 24));
  console.log(differenceDays);
  return differenceDays;
  }


  useEffect(()=>{
    getReunion()
    setDate(formatDateToYYMMDD(new Date()))
  },[])


  return (
    <div className='one-filiale'>
        <p>Nom : {reunion?.name}</p>
        <p>Date : {reunion?.date?.substring(0,10)}</p>
        {
            dateDiffInDays(new Date(reunion?.date),new Date()) >= 0 && reunion.etat !== "Terminé" && reunion.etat !== "Annulé" ? 
            <p className='visitButton' onClick={(e)=>{
              e.preventDefault();
              navigate(`/`+navigation(),{ state: { account: account , reunion : reunion} })
              handleAddPresence()
            }}>Visiter</p> : <></>
          }

    </div>
  )
}

export default OneInvitation