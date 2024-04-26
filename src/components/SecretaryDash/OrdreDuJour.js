import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneOrdre from './OneOrdre'
import AddOrdre from './AddOrdre'



const OrdreDuJour = ({reunion}) => {
  const [reload ,setReload] = useState(false)
  const [ordres,setOrdres] = useState([])

const fetchOrdres = async () => {
  try {
    const response = await axios.get(`http://localhost:3010/api/ordreJour/getAllByReunion/${reunion.id}`)
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
		<p className='filiales-titre'>Ordre de Jour</p>
		<AddOrdre reload={reload} setReload={setReload} reunion={reunion}/>
		</div>
		<div className='filiales-container'>
			{
				ordres.map((ordre,index)=>{
                    return <OneOrdre key={index} ordre={ordre} reload={reload} setReload={setReload} />
                })
			}
		</div>
		<ToastContainer />
	</div>
  )


}

export default OrdreDuJour