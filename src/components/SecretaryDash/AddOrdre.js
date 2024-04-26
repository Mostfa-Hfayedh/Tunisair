import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};



const AddOrdre = ({reload,setReload,reunion}) => {
  const [open, setOpen] = useState(false);
  const [typeAction,setTypeAction] = useState('');
  const [nature, setNature] = useState('')
  const [num, setNum] = useState('')
  const [description, setDescription] = useState('')
  const location = useLocation();
  const account = location.state.account

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
	
	  const notify = () => {
		toast.success("Ordre du jour Crée", {
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
        const token = localStorage.getItem("token");
        if (token) {
            if(typeAction && nature && num && description){
              const res = await axios.post(
                "http://localhost:3010/api/ordreJour/create",
                body
              );
              notify();
              handleClose();
              setReload(!reload)
            }
            else{
              notifyError()
            }
          }

        }
       catch (error) {
        console.log(error);
        notifyError();
      }
    };

    useEffect(()=>{

  },[reload ])

  return (
    <div>
      {
        account.role === "Sécrétaire" ?
        <Button onClick={handleOpen} className="addButton">
        + Ajouter
      </Button> : <></>
      }
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
          <div className="compte-form">
          <div className="Type">
                  <p>Type d'action :</p>
                  <div className="radio-button-container">
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio1"
                        name="radio-group"
                        value="Décision"
                        onChange={(e)=>setTypeAction(e.target.value)}
                      />
                      <label className="radio-button__label" htmlFor="radio1">
                        <span className="radio-button__custom"></span>
                        Décision
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio3"
                        name="radio-group"
                        value="Résolution"
                        onChange={(e)=>setTypeAction(e.target.value)}
                      />
                      <label className="radio-button__label" htmlFor="radio3">
                        <span className="radio-button__custom"></span>
                        Résolution
                      </label>
                    </div>
                  </div>
                </div>
                <div className="Type">
                  <p>Nature :</p>
                  <div className="radio-button-container">
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio4"
                        name="radio-group1"
                        value="Formelle"
                        onChange={(e)=>setNature(e.target.value)}
                      />
                      <label className="radio-button__label" htmlFor="radio4">
                        <span className="radio-button__custom"></span>
                        Formelle
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio5"
                        name="radio-group1"
                        value="Stratégique"
                        onChange={(e)=>setNature(e.target.value)}
                      />
                      <label className="radio-button__label" htmlFor="radio5">
                        <span className="radio-button__custom"></span>
                        Stratégique
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio6"
                        name="radio-group1"
                        value="Financière"
                        onChange={(e)=>setNature(e.target.value)}
                      />
                      <label className="radio-button__label" htmlFor="radio6">
                        <span className="radio-button__custom"></span>
                        Financière
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio7"
                        name="radio-group1"
                        value="Gestion(AIF)"
                        onChange={(e)=>setNature(e.target.value)}
                      />
                      <label className="radio-button__label" htmlFor="radio7">
                        <span className="radio-button__custom"></span>
                        Gestion(AIF)
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio8"
                        name="radio-group1"
                        value="Gestion(SIF)"
                        onChange={(e)=>setNature(e.target.value)}
                      />
                      <label className="radio-button__label" htmlFor="radio8">
                        <span className="radio-button__custom"></span>
                        Gestion(SIF)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="longInput">
              <p>Nom :</p>
              <input type="text" onChange={(e)=>setNum(e.target.value)} />
            </div>
                <div className="longInput">
              <p>Description :</p>
              <input type="text" onChange={(e)=>setDescription(e.target.value)} />
            </div>



            <div className="filialeButtons">
              <Button
                className="addButton"
                onClick={(e) => {
                  e.preventDefault();
                  handleAdd({
                    TypeDaction : typeAction ,
                    Nature : nature,
                    Num : num,
                    Description : description,
                    ReunionId : reunion.id,
                  })
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
  )
}

export default AddOrdre