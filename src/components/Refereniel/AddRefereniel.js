import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";

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

const AddRefereniel = ({reload,setReload}) => {
    const [titre, setTitre] = useState('')
    const [version,setVersion] = useState('')
    const [date,setDate] = useState('')
    const [document,setDocument] = useState('')
//     const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);


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
		toast.success("Filiale Crée", {
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

    //   const handleAdd = async (body) => {
    //     try {
    //       const token = localStorage.getItem("token");
    //       if (token) {
    //         if(titre   ){
    //             const res = await axios.post(
    //                 "http://localhost:3010/api/refereniel/create",
    //                 body
    //               );
    //               notify();
    //               handleClose();
    //               setReload(!reload)
    //         }else {
    //             notifyError()
    //         }
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       notifyError();
    //     }
    //   };

  return (
    <div>
      {/* <Button onClick={handleOpen} className="addButton">
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
              <div className="longInput">
                <p>Titre :</p>
                <input type="text" onChange={(e)=>setTitre(e.target.value)}/>
              </div>
             
                                  <div className="longInput">
                <p>Addresse :</p>
                <input type="text" />
              </div>
              <div className="midFilialeSection">
                <div className="shortInputsSection">
                  <div className="shortInput">
                    <p>Directeur Général :</p>
                    <input type="text"  />
                  </div>
                  <div className="shortInput">
                    <p>Valuer Nominale :</p>
                    <input type="text"/>
                  </div>
                  <div className="shortInput">
                    <p>Identifiant Unique :</p>
                    <input type="text"  />
                  </div>
                </div>
               
              </div>
        
            
                   
              <div className="filialeButtons">
                <Button  className="addButton" >
                  Ajouter
                </Button>
                <Button onClick={handleClose} className="addButton">
                  Annuler
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  )
}

export default AddRefereniel