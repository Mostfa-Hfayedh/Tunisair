import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneRecommandation from './OneRecommandation'

const Recommandation = ({reunion}) => {
    const [reload ,setReload] = useState(false)
    const [recommandation,setRecommandation] = useState([])
  
  const fetchOrdres = async () => {
    try {
      const response = await axios.get(``)
            setOrdres(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  useEffect(()=>{
    fetchOrdres()
  },[reload])

  return (
    <div className='filiales'>  
    <div className='filiales-header'>
    <p className='filiales-titre'>Recommandation</p>
    </div>
    <div className='filiales-container'>
      <OneRecommandation />
        {
            recommandation.map((recoommandation,index)=>{
                return <OneRecommandation key={index} recommandation={recommandation} reload={reload} setReload={setReload} />
            })
        }
    </div>
    <ToastContainer />
</div>
  )
}

export default Recommandation