import React, { useEffect, useState } from 'react'
import './Filiales.css'
import OneFiliale from './OneFiliale'
import AddFiliale from './AddFiliale'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Filiales = () => {
	const [reload ,setReload] = useState(false)
	const [filiales,setFiliales] = useState([])

	const fetchFiliales = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/filiale/getAll')
            setFiliales(response.data)
		} catch (error) {
			console.log(error);
		}
	}



	useEffect(()=>{
		fetchFiliales()
	},[reload])


  return (
	<div className='filiales'>
		<div className='filiales-header'>
		<p className='filiales-titre'>Filiales</p>
		<AddFiliale reload={reload} setReload={setReload} />
		</div>
		<div className='filiales-container'>
			{
				filiales.map((filiale,index)=>{
                    return <OneFiliale key={index} filiale={filiale} reload={reload} setReload={setReload} />
                })
			}
		</div>
		<ToastContainer />
	</div>
  )
}

export default Filiales