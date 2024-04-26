import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneDocument from './OneDocument'
import AddDocument from './AddDocument'


const Document = () => {
  const [reload ,setReload] = useState(false)
  const [Document,setDocument] = useState([])


  return (
    <div className='filiales'>  
    <div className='filiales-header'>
    <p className='filiales-titre'>Documents</p>
    <AddDocument reload={reload} setReload={setReload} />
    </div>
    <div className='filiales-container'>
        {
            Document.map((document,index)=>{
                return <OneDocument key={index} document={document} reload={reload} setReload={setReload} />
            })
        }
    </div>
</div>
  )
}

export default Document