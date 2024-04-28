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
import "./reunion.css"
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

const AddReunion = ({reload,setReload}) => {
  const [open, setOpen] = useState(false);
  const [options,setOptions] = useState([])
  const [type, setType] = useState('')
  const [users,setUsers] = useState([]);
  const [selectedUsers,setSelectedUsers] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [comptes , setComptes] = useState([]);
  const location = useLocation()
  const account = location.state.account


  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOptions([])
    setType('')
    setDate('')
    setName('')
  };

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
		toast.success("Reunion Crée", {
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
    const handleSelectedOptions = (users) => {

      const options = users.map((user) => {
        return {
          value: user.id,
          label: user.name,
        };
      });
      setOptions(options);
    };

    const prepBody = (arr)=>{
      let body = {}
      arr.forEach((compte)=>{
          body[compte.UtilisateurId] = compte.UtilisateurId 
      }) 
      return body
  }

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        if(token){
          const comptes = await axios.get(`http://localhost:3010/api/comptes/getAllCompteByFiliale/${account.FilialeId}`)
          setComptes(comptes.data)
          const filter1 = comptes.data.filter((compte)=>{
            return compte.id!== account.id
          })
          if(type){
            if(type === 'CA'){
              const filter2 = filter1.filter((compte)=>{
                return compte.role !== "Actionnaire"
              })
              const users = await axios.post('http://localhost:3010/api/comptes/getUsersById',prepBody(filter2))
              handleSelectedOptions(users.data)
            }
            else{
              const filter2 = filter1.filter((compte)=>{
                return compte.role !== "Administrateur"
              })
              const users = await axios.post('http://localhost:3010/api/comptes/getUsersById',prepBody(filter2))
              handleSelectedOptions(users.data)
            }
          }

        }
      } catch (error) {
          console.log(error);
      }
  }

    const handleAdd = async (body) => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          if(name && date && type && selectedUsers){

            const res = await axios.post(
              "http://localhost:3010/api/reunion/create",
              body
            );
            for (let compte of comptes){
              await axios.post('http://localhost:3010/api/invitation/create',{
                ReunionId : res.data.id ,
                CompteId : compte.id
              })
            }
            notify();
            handleClose();
            setReload(!reload)
          }
          else{
            notifyError()
          }
        }
      } catch (error) {
        console.log(error);
        notifyError();
      }
    };

    useEffect(()=>{
      fetchUsers()
  },[reload , type])


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
            <div className="Type">
                    <p>Type :</p>
                    <div className="radio-button-container">
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio1"
                          name="radio-group"
                          value="AGO"
                          onChange={(e)=>setType(e.target.value)}
                        />
                        <label className="radio-button__label" htmlFor="radio1">
                          <span className="radio-button__custom"></span>
                          AGO
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio3"
                          name="radio-group"
                          value="AGE"
                          onChange={(e)=>setType(e.target.value)}
                        />
                        <label className="radio-button__label" htmlFor="radio3">
                          <span className="radio-button__custom"></span>
                          AGE
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio2"
                          name="radio-group"
                          value="CA"
                          onChange={(e)=>setType(e.target.value)}
                        />
                        <label className="radio-button__label" htmlFor="radio2">
                          <span className="radio-button__custom"></span>
                          CA
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="longInput">
                <p>Nom :</p>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="custom-select">
                <p>Utilisateur :</p>
                <Select
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  styles={{ width: "100%" }}
                  options={options}
                  isMulti
                  onChange={(e)=>{
                    setSelectedUsers(e)
                  }}
                  placeholder="Choisir utilisateur"
                />
              </div>
              <div className="custom-select">
                <p>Date :</p>
                  <input type="date"  onChange={(e)=>{
                    setDate(e.target.value)
                  }} />
              </div>


              <div className="filialeButtons">
                <Button
                  className="addButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAdd({
                      date,
                      type,
                      name,
                      FilialeId:account.FilialeId
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

export default AddReunion