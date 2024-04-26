import React, { useEffect, useState } from "react";
import "./Compte.css";
import OneCompte from "./OneCompte";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Compte() {
  const [accounts,setAccounts] = useState([])
  const location = useLocation()

  const user = location.state.userId



  const getAccountsByUser = async () => {
    try {
      const data = await axios.get(`http://localhost:3010/api/comptes/getAllCompteByUser/${user}`)
      setAccounts(data.data)
    } catch (error) {
      console.log(error);    
    }
  }


  useEffect(()=>{
    getAccountsByUser()
  },[])

  return (
    <div className="compteContainer">
      {
        accounts.map((account , index) => {
          return (
            <OneCompte key={index} account={account} user={user}/>
          )
        })
      }
    </div>
  );
}

export default Compte;
