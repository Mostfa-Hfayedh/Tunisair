import React, { useEffect, useState } from 'react'
import './Refereniel.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneRefereniel from './OneRefereniel'
import AddRefereniel from './AddRefereniel'




const Refereniel = () => {

    const [reload ,setReload] = useState(false)
	const [refereniel,setRefereniel] = useState([])

	const fetchRefereniel = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/refereniel/getAll')
            setRefereniel(response.data)
		} catch (error) {
			console.log(error);
		}
    }

	useEffect(()=>{
		fetchRefereniel()
	},[reload])

  return (
    <div className='filiales'>
		<div className='filiales-header'>
		<p className='filiales-titre'>Refereniel</p>
		<AddRefereniel reload={reload} setReload={setReload} />
		</div>
		<div className='filiales-container'>
			
			{
				refereniel.map((refereniel,index)=>{
                    return <OneRefereniel key={index} refereniel={refereniel} reload={reload} setReload={setReload} />
                })
			}
		</div>
		<ToastContainer />
	</div>
  )
}

export default Refereniel