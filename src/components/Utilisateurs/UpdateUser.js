import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import {  toast } from "react-toastify";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const UpdateUser = ({handleClose , open, reload,setReload,user}) => {
  const [matricule, setMatricule] = useState(user.matricule);
  const [sexe, setSexe] = useState(user.sexe);
  const [mobile, setMobile] = useState(user.phone);
  const [tunis, setTunis] = useState(user.personnelTunisair);
  const [legal, setLegal] = useState(user.representantLegal);
  const [cin, setCin] = useState(user.cin);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

    const notifyError = () => {
        toast.error("Confirmer vos cordonnées", {
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
    
      const notify = () => {
        toast.success("Utilisateur Mis a Jour", {
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
      const handleUpdate = async (body) => {
        try {
          const token = localStorage.getItem("token");
          if (token) {
                 await axios.put(
                    `http://localhost:3010/api/utilisateur/update/${user.id}`,
                    body
                  );
                  notify();
                  handleClose();
                  setReload(!reload)

          }
        } catch (error) {
          console.log(error);
          notifyError();
        }
      };
  return (
    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className="filiale-form">
          <div className="user-form">
                <div className="user-form-left">
                  <div className="titre">
                    <p>Titre :</p>
                    <div className="radio-button-container">
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio1"
                          name="radio-group"
                          value="homme"
                          onChange={(e)=>setSexe(e.target.value)}
                          checked={sexe === "homme"}
                        />
                        <label className="radio-button__label" htmlFor="radio1">
                          <span className="radio-button__custom"></span>
                          M.
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio2"
                          name="radio-group"
                          value="femme"
                          onChange={(e)=>setSexe(e.target.value)}
                          checked={sexe === "femme"}
                        />
                        <label className="radio-button__label" htmlFor="radio2">
                          <span className="radio-button__custom"></span>
                          Mme.
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="longInput">
                    <p>Matricule :</p>
                    <input type="text" onChange={(e)=>setMatricule(e.target.value)} value={matricule}/>
                  </div>
                  <div className="longInput">
                    <p>Mobile :</p>
                    <input type="text" onChange={(e)=>setMobile(e.target.value)} value={mobile}/>
                  </div>
                  <div className="longInput">
                    <p>Email :</p>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                  </div>
                </div>
                <div className="user-form-right">
                <div className="longInput">
                    <p>Nom :</p>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                  </div>
                  <div className="longInput">
                    <p>CIN :</p>
                    <input type="text" onChange={(e)=>setCin(e.target.value)} value={cin}/>
                  </div>
                  <div className="toggle-section">
                    <p>Personnel Tunisair :</p>
                    <label className="switch">
                      <input type="checkbox" checked={tunis}onChange={(e)=>{
                        setTunis(true)
                        setLegal(false)
                      }} />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="toggle-section">
                    <p>Représentant Legal :</p>
                    <label className="switch">
                      <input type="checkbox" checked={legal} onChange={(e)=>{
                        setTunis(false)
                        setLegal(true)
                      }} />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>

            <div className="filialeButtons">
              <Button  className="addButton" onClick={(e)=>{
                handleUpdate({
                  name,
                  matricule,
                  sexe,
                  phone: mobile,
                  cin,
                  personnelTunisair: tunis,
                  representantLegal: legal,
                  email,
                })
              }}>
                Enregistrer
              </Button>
              <Button onClick={handleClose} className="addButton">
                Annuler
              </Button>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  </div>
  )
}

export default UpdateUser