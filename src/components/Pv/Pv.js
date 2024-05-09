import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OnePv from './OnePv'
import AddPv from './AddPv'
import { useLocation } from 'react-router-dom'

const Pv = () => {

    const [reload ,setReload] = useState(false)
	const [pv,setPv] = useState([])
    const location = useLocation()
    const account = location.state.account
    

    const fetchPv = async () => {
        try {
            const pv = await axios.get('http://localhost:3010/api/Pv/getAll')
            setPv(pv.data)
        } catch (error) {
            console.log(error);
        }
    }

	
	useEffect(()=>{
        fetchPv()
	},[reload])
  return (
    <div className='filiales'>
    <div className='filiales-header'>
    <p className='filiales-titre'>Pvs</p>
        {
            account.role === "Sécrétaire" ?
            <AddPv reload={reload} setReload={setReload} />
            :
            <></>
        }
    </div>
    <div className='filiales-container'>
        {
            pv?.map((pv,index)=>{
                return <OnePv key={index} pv={pv} reload={reload} setReload={setReload} />
            })
        }
    </div> 
    <ToastContainer />
</div>
  )
}

export default Pv