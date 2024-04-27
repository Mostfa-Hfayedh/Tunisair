import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OnePresence from './OnePresence'



const Presence = () => {
  const [reload ,setReload] = useState(false)
  const [Presence,setPresence] = useState([])


  return (
    <div className='filiales'>  
    <div className='filiales-header'>
    <p className='filiales-titre'>Presence</p>
    </div>
    <div className='filiales-container'>
      <OnePresence/>
        {
            Presence.map((presence,index)=>{
                return <OnePresence key={index} presence={presence} reload={reload} setReload={setReload} />
            })
        }
    </div>
</div>
  )
}

export default Presence