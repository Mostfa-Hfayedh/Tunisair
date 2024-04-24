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
    width: "40%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };


const DeleteFiliale = ({handleClose , open , filiale , reload , setReload}) => {

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
        toast.success("Filiale Supprimé", {
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

      const handleDelete = async () => {
        try {
          const token = localStorage.getItem("token");
          if (token) {
                await axios.delete(
                    `http://localhost:3010/api/filiale/remove/${filiale.id}`
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
    <ToastContainer />
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

            <p className="delete">Vous êtes sure vous voulez supprimer la filiale : {filiale.denomination} ?</p>
            <div className="filialeButtons">
              <Button  className="addButton" onClick={(e)=>{
                  handleDelete()
              }}>
                Supprimer
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

export default DeleteFiliale