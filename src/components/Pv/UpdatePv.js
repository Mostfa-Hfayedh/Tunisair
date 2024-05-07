import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useLocation } from "react-router-dom";
import "./Pv.css"
const animatedComponents = makeAnimated();

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

const UpdatePv = ({handleClose,open,reload,setReload,pv}) => {
  const [selected,setSelected] = useState([])
  const [content,setContent] = useState(pv.Description)

  const notify = () => {
		toast.success("Pv Modifié", {
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
        ReunionId : selected.value
      })
      setReload(!reload)
      notify()
      handleClose()
    } catch (error) {
      console.log(error);
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
          <div className="compte-form">
                <div className="contentPv">
              <p>Contenu :</p>
              <textarea type="text" onChange={(e)=>setContent(e.target.value)} value={content}/>
            </div>
            <div className="custom-select">
              <p>Reunion :</p>
              <Select
                closeMenuOnSelect={true}
                components={animatedComponents}
                styles={{ width: "100%" }}
                onChange={(e)=>{
                  setSelected(e)
                }}
                placeholder="Choisir utilisateur"
              />
            </div>
          <div className="filialeButtons">
              <Button
                className="addButton"
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdatePv()
                }}
              >
                Modifier
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

export default UpdatePv