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
  width: "20%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Vote = ({handleClose,ordre,open}) => {
    const [vote,setVote] = useState(false)

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
        toast.success("Vote Crée", {
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
                await axios.post(
                    `http://localhost:3010/api/vote/create`,
                    body
                  );
                  notify();
                  handleClose();    
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
          <div className="filiale-form-delete">
          <div className="Type">
                  <p>Vote :</p>
                  <div className="radio-button-container">
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio1"
                        name="radio-group"
                        value="Décision"
                        onChange={(e)=>{
                            setVote(true)
                        }}
                      />
                      <label className="radio-button__label" htmlFor="radio1">
                        <span className="radio-button__custom"></span>
                        Pour
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        type="radio"
                        className="radio-button__input"
                        id="radio3"
                        name="radio-group"
                        value="Résolution"
                        onChange={(e)=>{
                            setVote(false)
                        }}
                      />
                      <label className="radio-button__label" htmlFor="radio3">
                        <span className="radio-button__custom"></span>
                        Contre
                      </label>
                    </div>
                  </div>
                </div>

            <div className="filialeButtons">
              <Button  className="addButton" onClick={(e)=>{
                handleAdd({
                  vote,
                  OrderJourId : ordre.id
                })
              }}>
                Vote
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

export default Vote