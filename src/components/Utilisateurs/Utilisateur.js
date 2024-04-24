import React, { useEffect, useState } from 'react'
import OneUser from './OneUser'
import axios from 'axios'
import AddUser from './AddUser'
import { ToastContainer } from 'react-toastify'
import './user.css'

const Utilisateur = () => {
	const [users,setUsers] = useState([])
	const [reload ,setReload] = useState(false)

	const fetchUSers = async () => {
		try {
			const token = localStorage.getItem("token")
			const res = await axios.get(
			  "http://localhost:3010/api/utilisateur/getOne",
			  {
				headers: {
				  Authorization: `Bearer ${token}`,
				},
			  }
			);
			const response = await axios.get('http://localhost:3010/api/utilisateur/getAll')
			const userList = response.data.filter((user)=>{
				return res.data.name !== user.name
			})
            setUsers(userList)
			
		} catch (error) {
			console.log(error);
		}
	}


	useEffect(()=>{
		fetchUSers()
	},[reload])


  return (
	<div className='filiales'>
		<div className='filiales-header'>
		<p className='filiales-titre'>Utilisateur</p>
		<AddUser reload={reload} setReload={setReload}/>
		</div>
		<div className='filiales-container'>
			{
				users.map((user,index)=>{
                    return <OneUser key={index} user={user} reload={reload} setReload={setReload} />
                })
			}
		</div>
		<ToastContainer />
	</div>
  )
}

export default Utilisateur