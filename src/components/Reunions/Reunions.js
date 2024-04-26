import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import AddReunion from './AddReunion'
import OneReunion from './OneReunion'

const Reunions = () => {
	const [reload ,setReload] = useState(false)
	const [reunions,setReunions] = useState([])

	const fetchReunions = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/reunion/getAll')
            setReunions(response.data)
		} catch (error) {
			console.log(error);
		}
	}

	
	useEffect(()=>{
		fetchReunions()
	},[reload])

  return (
	<div className='filiales'>
		<div className='filiales-header'>
		<p className='filiales-titre'>Réunions</p>
		<AddReunion reload={reload} setReload={setReload} />
		</div>
		<div className='filiales-container'>
			{
				reunions?.map((reunion,index)=>{
                    if(!reunion.done){
						return <OneReunion key={index} reunion={reunion} reload={reload} setReload={setReload} />
					}
                })
			}
		</div> 
		<ToastContainer />
	</div>
  )
}

export default Reunions