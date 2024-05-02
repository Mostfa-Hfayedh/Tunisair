import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OnePresence from './OnePresence'



const Presence = ({reunion}) => {
  const [reload ,setReload] = useState(false)
  const [presence,setPresence] = useState([])


  function removeDuplicatesByKey(arr, key) {
    return arr.filter((obj, index, self) =>
      index === self.findIndex((t) => (
        t[key] === obj[key]
      ))
    );
  }

  const getPresence = async () => {
    try {
      const presence = await axios.get(`http://localhost:3010/api/invitation/getByReunion/${reunion.id}`)
      console.log(presence.data);
      setPresence(removeDuplicatesByKey(presence.data,'CompteId'))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getPresence()
  },[reload])


  return (
    <div className='filiales'>  
    <div className='filiales-header'>
    <p className='filiales-titre'>Presence</p>
    </div>
    <div className='filiales-container'>

        {
            presence.map((presence,index)=>{
                return <OnePresence key={index} presence={presence} reload={reload} setReload={setReload} />
            })
        }
    </div>
</div>
  )
}

export default Presence