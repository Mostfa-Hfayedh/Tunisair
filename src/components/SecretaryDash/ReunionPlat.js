import React from 'react'
import './reunionPlat.css'
import { useLocation } from 'react-router-dom'
import OrdreDuJour from './OrdreDuJour'

const ReunionPlat = () => {
    const location = useLocation()
    const reunion = location.state.reunion
    const account = location.state.account

  return (
    <div className='reunion-container'>
        <div className='reunion-header'>
            <p>Nom de Réunion : {reunion.name}</p>
            <p>Type de Réunion : {reunion.type}</p>
            <p>Date de Réunion : {reunion.date.substring(0,10)}</p>
        </div>
        <OrdreDuJour  reunion={reunion}/>
    </div>
  )
}

export default ReunionPlat