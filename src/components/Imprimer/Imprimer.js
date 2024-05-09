import React from 'react'
import "./imprimer.css"
import { useLocation } from 'react-router-dom'

const Imprimer = () => {
    const location = useLocation()
    const reunion = location.state.reunion
    const pv = location.state.pv

  return (
    <div className='imprimer'>
      <div className="imprimer-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/6/60/Tunis_Air_Club.png"
          alt=""
        />
      </div>
      <div className="imprimer-body">
            <p>Reunion : {reunion.name}</p>
            <p>Type de Reunion : {reunion.type}</p>
            <p>PV : {pv.Description}</p>
      </div>
        <button onClick={() => window.print()}>Imprimer</button>
    </div>
  )
}

export default Imprimer