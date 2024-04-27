import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneInvitation from './OneInvitation'


const Invitation = () => {

    const [reload ,setReload] = useState(false)
	const [invitations,setInvitations] = useState([])

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
		<p className='filiales-titre'>Invitation</p>
		</div>
		<div className='filiales-container'>
            <OneInvitation/>
			{
				invitations?.map((invitation,index)=>{
                    if(!invitation.done){
						return <OneInvitation key={index} invitation={invitation} reload={reload} setReload={setReload} />
					}
                })
			}
		</div> 
		<ToastContainer />
	</div>
  )
}

export default Invitation