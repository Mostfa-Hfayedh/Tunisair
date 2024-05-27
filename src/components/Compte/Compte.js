import React, { useEffect, useState } from "react";
import "./Compte.css";
import OneCompte from "./OneCompte";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBuilding,
  faCircleUser,
  faFile,
  faMessage,
  faRightFromBracket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Compte() {
  const navigate = useNavigate();
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
    <div className="comptes-page">
    <div className="compteContainer">
      {
        accounts.map((account , index) => {
          return (
            <OneCompte key={index} account={account} user={user}/>
          )
        })
      }
    </div>
            <div
        className="logOut"
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        <FontAwesomeIcon className="icons" icon={faRightFromBracket} />
        <p>deconnecter</p>
      </div>
    </div>
  );
}

export default Compte;
