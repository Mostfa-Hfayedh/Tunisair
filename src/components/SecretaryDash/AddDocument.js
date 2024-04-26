import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const AddDocument = () => {
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

export default AddDocument