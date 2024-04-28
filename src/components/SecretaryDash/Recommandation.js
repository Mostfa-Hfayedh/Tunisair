import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneRecommandation from './OneRecommandation'

const Recommandation = ({reunion}) => {
    const [reload ,setReload] = useState(false)
    const [recommandation,setRecommandation] = useState([])
    const [content , setContent] = useState('')
  
  const fetchRcm = async () => {
    try {
      const response = await axios.get(`http://localhost:3010/api/recommandation/getAll`)
            setRecommandation(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const notify = () => {
    toast.success("Recommandation Ajouté", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAdd = async () => {
    try {
      const token = localStorage.getItem('token')
      if(token) {
        await axios.post(
          `http://localhost:3010/api/recommandation/create`,
          {
            description : content,
            ReunionId : reunion.id,
          }
        )
        notify()
        setContent('')
        setReload(!reload)
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  useEffect(()=>{
    fetchRcm()
  },[reload])

  return (
    <div className='filiales'>  
    <div className='filiales-header'>
    <p className='filiales-titre'>Recommandation</p>
    </div>
    <div className='filiales-container'>
        {
            recommandation.map((recommandation,index)=>{
                return <OneRecommandation key={index} recommandation={recommandation} reload={reload} setReload={setReload} />
            })
        }
       <div className='addRcm'>
          <input type='text' onChange={(e)=>setContent(e.target.value)}/>
          <p onClick={(e)=>{
            e.preventDefault()
            handleAdd()
          }}>Ajouter Recommandation</p>
        </div> 
    </div>
    <ToastContainer />
</div>
  )
}

export default Recommandation