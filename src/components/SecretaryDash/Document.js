import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneDocument from './OneDocument'
import AddDocument from './AddDocument'


const Document = () => {


  return (
    <div className='filiales'>  
    <div className='filiales-header'>
    <p className='filiales-titre'>Documents</p>
    <AddDocument reload={reload} setReload={setReload} reunion={reunion}/>
    </div>
    <div className='filiales-container'>
        {
            Document.map((Document,index)=>{
                return <OneDocument key={index} Document={document} reload={reload} setReload={setReload} />
            })
        }
    </div>
    <ToastContainer />
</div>
  )
}

export default Document