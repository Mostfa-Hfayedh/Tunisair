import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OnePv from './OnePv'
import AddPv from './AddPv'

const Pv = () => {

    const [reload ,setReload] = useState(false)
	const [pv,setInvitations] = useState([])

	const fetchReunions = async () => {
		try {
			const response = await axios.get('')
            setInvitations(response.data)
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
    <p className='filiales-titre'>Pvs</p>
    <AddPv reload={reload} setReload={setReload} />
    </div>
    <div className='filiales-container'>
        <OnePv/>
        {
            pv?.map((pv,index)=>{
                if(!pv.done){
                    return <OnePv key={index} pv={pv} reload={reload} setReload={setReload} />
                }
            })
        }
    </div> 
    <ToastContainer />
</div>
  )
}

export default Pv