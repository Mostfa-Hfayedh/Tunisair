import React, { useEffect, useState } from 'react'
import './Refereniel.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneRefereniel from './OneRefereniel'
import AddRefereniel from './AddRefereniel'
import { useLocation } from 'react-router-dom'




const Refereniel = () => {

    const [reload ,setReload] = useState(false)
	const [refereniel,setRefereniel] = useState([])
	const location = useLocation()
	const account = location.state.account

	const fetchRefereniel = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/refereniel/getAll')
			console.log(response.data);
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
			{
				account.role === 'Sécrétaire' ? 		<AddRefereniel reload={reload} setReload={setReload} account={account} /> : <></>
			}
		</div>
		<div className='filiales-container'>
			
			{
				refereniel?.map((refereniel,index)=>{
                    return <OneRefereniel key={index} refereniel={refereniel} reload={reload} setReload={setReload} account={account} />
                })
			}
		</div>
		<ToastContainer />
	</div>
  )
}

export default Refereniel