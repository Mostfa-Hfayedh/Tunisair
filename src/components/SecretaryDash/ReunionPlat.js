import React, { useState } from "react";
import "./reunionPlat.css";
import { useLocation } from "react-router-dom";
import OrdreDuJour from "./OrdreDuJour";
import Document from "./Document";
import Recommandation from "./Recommandation";
import Presence from "./Presence";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import {ToastContainer , toast } from "react-toastify";
const animatedComponents = makeAnimated();
const options = [
  { label: "Prévue", value: "Prévue" },
  { label: "En Cours", value: "En Cours" },
  { label: "Terminé", value: "Terminé" },
  { label: "Annulé", value: "Annulé" },
]

const ReunionPlat = () => {
  const location = useLocation();
  const reunion = location.state.reunion;
  const account = location.state.account;
  const [selected,setSelected] = useState({ label: reunion?.etat , value: reunion?.etat })

  const notify = () => {
		toast.success("Reunion Mis à jour", {
		  position: "top-center",
		  autoClose: 3000,
		  hideProgressBar: false,
		  closeOnClick: true,
		  pauseOnHover: false,
		  draggable: true,
		  progress: undefined,
		  theme: "light",
		});
	  };

  const handleUpdateReunion = async  () => {
    try {
      await axios.put(`http://localhost:3010/api/reunion/update/${reunion?.id}`,{
        etat : selected.value
      })
      notify()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="reunion-container">
      <div className="reunion-header">
        <p>Nom de Réunion : {reunion?.name}</p>
        <p>Type de Réunion : {reunion?.type}</p>
        <p>Date de Réunion : {reunion?.date.substring(0, 10)}</p>
      </div>
      <div className="reunion-header">
        <p>Lieu de Reunion : {reunion?.lieu}</p>
        <div className="custom-select-reunion">
          <p>Etat :</p>
          <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            styles={{ width: "100%" }}
            options={options}
            value={selected}
            onChange={(e) => {
              setSelected(e)
            }}
            onBlur={()=>{
              console.log(reunion.etat);
            }}
            placeholder="Choisir Etat"
          />
          <p id="etatButton" onClick={(e)=>{
            e.preventDefault();
            handleUpdateReunion();
          }}>Enregistrer</p>
        </div>
      </div>
      <OrdreDuJour reunion={reunion} />
      <Document reunion={reunion} />
      <Presence reunion={reunion} />
      <Recommandation reunion={reunion} />
      <ToastContainer/>
    </div>
  );
};

export default ReunionPlat;
