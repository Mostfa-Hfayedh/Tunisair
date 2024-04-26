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
  width: "35%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddDocument = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation()
  const account = location.state.account


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
         



            <div className="filialeButtons">
              <Button
                className="addButton"
                onClick={(e) => {
                  e.preventDefault();

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

export default AddDocument