import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import {toast } from "react-toastify";
import axios from "axios";

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


const ValidatePv = ({reload,setReload,handleClose,open,pv}) => {
  const [content,setContent] = useState(pv.Description)
  const [valid,setValid] = useState(pv.valid)

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
        toast.success("Pv Supprimé", {
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
      const handleUpdatePv = async () => {
        try {
          await axios.put(`http://localhost:3010/api/Pv/update/${pv.id}`,{
            Description : content ,
            valid : valid
          })
          setReload(!reload)
          notify()
          handleClose()
        } catch (error) {
          console.log(error);
          notifyError()
        }
      }


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
          <div className="filiale-form-delete">

          <div className="contentPv">
              <p>Contenu :</p>
              <textarea type="text" onChange={(e)=>setContent(e.target.value)} value={content}/>
            </div>
            <div className="valid">
                  <p>Valider :</p>
                  <div className="typeRadio">
                    <div className="radio-button-container">
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio1"
                          name="radio-group"
                          onChange={(e) => setValid(true)}
                          checked={valid === true}
                        />
                        <label className="radio-button__label" htmlFor="radio1">
                          <span className="radio-button__custom"></span>
                          Oui
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio2"
                          name="radio-group"
                          onChange={(e) => setValid(false)}
                          checked={valid === false}
                        />
                        <label className="radio-button__label" htmlFor="radio2">
                          <span className="radio-button__custom"></span>
                          Non
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
            <div className="filialeButtons">
              <Button  className="addButton" onClick={(e)=>{
                handleUpdatePv()
              }}>
                Validate
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

export default ValidatePv