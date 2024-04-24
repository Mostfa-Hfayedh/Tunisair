import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OneCompte = ({account}) => {
  const navigate = useNavigate()
  const [utilisateur,setUtilisateur] =  useState({})



  const getUser = async () => {
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
      console.log(res.data);
      setUtilisateur(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigation = () => {
    return account.role === "Gestionnaire" ? "gestionnaireDash/profile" : account.role === "Actionnaire" ? "" : account.role === "Décideur" ? "" : account.role === "Administrateur" ? "" : account.role === "Sécrétaire" ? "" : ""
  }

  useEffect(()=>{
    getUser()
  },[])

  return (  
    <div className="card">
      <div className="image">
        <img src={utilisateur.photo} alt=""/>
      </div>
      <div className="card-info">
        <span>{utilisateur.name}</span>
        <p>{account.role}</p>
      </div>
      <a href="" className="button" onClick={()=>{
        navigate("/"+navigation() , {state :{ account : account}})
      }}>
        Login 
      </a>  
    </div>
  );
};

export default OneCompte;
