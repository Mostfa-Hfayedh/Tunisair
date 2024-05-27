import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneInvitation from './OneInvitation'
import { useLocation } from 'react-router-dom'


const Invitation = () => {

    const [reload ,setReload] = useState(false)
	const [invitations,setInvitations] = useState([])
	const location = useLocation()
	const account = location.state.account

	const fetchInvitation = async () => {
		try {
			const response = await axios.get(`http://localhost:3010/api/invitation/getByCompte/${account.id}`)
            setInvitations(response.data)
		} catch (error) {
			console.log(error);
		}
	}

	
	useEffect(()=>{
		fetchInvitation()
	},[reload])

  return (
    <div className='filiales'>
		<div className='filiales-header'>
		<p className='filiales-titre'>Invitations</p>
		</div>
		<div className='filiales-container'>
			{
				invitations?.map((invitation,index)=>{
                    if(!invitation.done){
						return <OneInvitation key={index} invitation={invitation} reload={reload} setReload={setReload}  />
					}
                })
			}
		</div>
		<ToastContainer />
	</div>
  )
}

export default Invitation