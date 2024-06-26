import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";



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

const ReadRecommandation = ({open,handleClose,recommandation}) => {
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
      onBlur={()=>handleClose()}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className="filiale-form-delete">
            <p className="delete">{recommandation.description}</p>
          </div>
        </Box>
      </Fade>
    </Modal>
  </div>
  )
}

export default ReadRecommandation