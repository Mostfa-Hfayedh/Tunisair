import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import OneAccount from './OneAccount'
import AddCompte from './AddCompte'
import { useLocation } from 'react-router-dom'
import './account.css'

const Comptes = () => {
    const [reload ,setReload] = useState(false)
    const [comptes,setComptes] = useState([])
    const location = useLocation()
    const account = location.state.account

    const fetchComptes = async () => {
        try {
            const response = await axios.get('http://localhost:3010/api/comptes/getAll')
            const comptesList = response.data.filter((compte)=>{
                return compte.id !== account.id
            })
            setComptes(comptesList)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComptes()
    }, [reload])
    
  return (
    <div className='filiales'>
    <div className='filiales-header'>
    <p className='filiales-titre'>Comptes</p>
    <AddCompte reload={reload} setReload={setReload}/>
    </div>
    <div className='filiales-container'>
        {
            comptes.map((compte,index)=>{
                return <OneAccount key={index} reload={reload} setReload={setReload} compte={compte} />
            })
        }
    </div>
    <ToastContainer />
</div>
  )
}

export default Comptes