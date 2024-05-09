import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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



const AddPv = ({reload,setReload}) => {
  const [open, setOpen] = useState(false);
  const [options,setOptions] = useState([])
  const [selected,setSelected] = useState({})
  const [content,setContent] = useState('')

  const location = useLocation()
  const account = location.state.account

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOptions = (reunions) => {

    const options = reunions.map((reunion) => {
      return {
        value: reunion.id,
        label: reunion.name,
      };
    });
    setOptions(options);
  }

  const fetchReunions = async () => {
    try {
      const reunions = await axios.get(`http://localhost:3010/api/reunion/getReunionByFiliale/${account.FilialeId}`)
      handleOptions(reunions.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddPv = async () => {
    try {
      await axios.post('http://localhost:3010/api/Pv/create',{
        Description : content ,
        ReunionId : selected.value
      })
      setReload(!reload)
      handleClose()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchReunions()
  },[])


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
          <div className="compte-form">
                <div className="contentPv">
              <p>Contenu :</p>
              <textarea type="text" onChange={(e)=>setContent(e.target.value)}/>
            </div>
            <div className="custom-select">
              <p>Reunion :</p>
              <Select
                closeMenuOnSelect={true}
                components={animatedComponents}
                styles={{ width: "100%" }}
                options={options}
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
                  handleAddPv()
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

export default AddPv