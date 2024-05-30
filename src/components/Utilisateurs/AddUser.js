import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddUser = ({ reload, setReload }) => {
  const [open, setOpen] = useState(false);
  const [matricule, setMatricule] = useState("");
  const [sexe, setSexe] = useState("");
  const [mobile, setMobile] = useState("");
  const [tunis, setTunis] = useState(false);
  const [legal, setLegal] = useState(false);
  const [cin, setCin] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const validateString = (str) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    setPasswordError(!regex.test(str))
  }
  const validateEmail = (str) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    setEmailError(!emailRegex.test(str))
  } 
  const formatInputMobile = (inputId) => {
    const input = document.getElementById(inputId);
    input.value = input.value.replace(/\D/g, '');
    setMobile(input.value)
}
  const formatInputCin = (inputId) => {
    const input = document.getElementById(inputId);
    input.value = input.value.replace(/\D/g, '');
    setCin(input.value)
}
  const notify = () => {
    toast.success("Utilisateur Crée", {
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
  const handleAdd = async (body) => {
    try {
      await axios.post("http://localhost:3010/api/utilisateur/register", body);
      setReload(!reload)
      handleClose()
      notify()
    } catch (error) {
      console.log(error);
      notifyError();
    }
  };
  return (
    <div>
      <Button onClick={handleOpen} className="addButton">
        + Ajouter
      </Button>
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
                    <input type="text" onChange={(e)=>setMatricule(e.target.value)}/>
                  </div>
                  <div className="longInput">
                    <p>Mobile :</p>
                    <input type="text" id="mobile" onChange={(e)=>formatInputMobile("mobile")}/>
                  </div>
                  <div className="longInput">
                    <p>Email :</p>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} onBlur={()=>(validateEmail(email))}/>
                  </div>
                  {
                    emailError? <p className="error">Veuillez entrer une adresse e-mail valide.</p> : <></>
                  }
                  <div className="longInput">
                    <p>Mot de passe :</p>
                    <input type="text" required onChange={(e)=>setPassword(e.target.value)} onBlur={()=>(validateString(password))}/>
                  </div>
                    {
                      passwordError ? <p className="error">Le mot de passe doit contenir au moins 1 caractère majuscule, 1 caractère minuscule, 1 chiffre et une longueur minimale de 8 caractères</p> : <></>
                    }
                </div>
                <div className="user-form-right">
                <div className="longInput">
                    <p>Nom :</p>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div className="longInput">
                    <p>CIN :</p>
                    <input type="text"  id="cin" onChange={(e)=>formatInputCin("cin")}/>
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
                <Button
                  className="addButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAdd({
                      name,
                      matricule,
                      sexe,
                      phone: mobile,
                      cin,
                      personnelTunisair: tunis,
                      representantLegal: legal,
                      email,
                      password,
                    });
                  }}
                >
                  Ajouter
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
  );
};

export default AddUser;
