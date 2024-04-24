import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
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

const UpdateCompte = ({handleClose,open,reload,setReload,compte}) => {
    const [users,setUsers] = useState([]);
    const [options,setOptions] = useState([])
    const [optionsFiliales,setOptionsFiliales] = useState([])
    const [filiales,setFiliales] = useState([])
    const [selectedFiliale, setSelectedFiliale] = useState(compte.FilialeId);
    const [selectedUser, setSelectedUser] = useState(compte.UtilisateurId);
    const [role,setRole] = useState(compte.role)
    const [accounts,setAccounts] = useState([])
    const [filiale,setFiliale] = useState({})
    const [utilisateur,setUtilisateur] = useState({})

    const handleDetails = async (filialeId,userId) => {
        try {
            const response = await axios.get(`http://localhost:3010/api/filiale/getOne/${filialeId}`)
            setFiliale({label : response.data.denomination , value : response.data.id})
            console.log({label : response.data.denomination , value : response.data.id});
      
            console.log(compte.UtilisateurId);
            const user = await axios.get(`http://localhost:3010/api/utilisateur/getOne/${userId}`)
            console.log({label : user.data.name , value : user.data.id});
            setUtilisateur({label : user.data.name , value : user.data.id})
        } catch (error) {
            console.log(error);
        }
    }

    const getAccountsByUser = async () => {
        try {
          const data = await axios.get(`http://localhost:3010/api/comptes/getAllCompteByUser/${selectedUser}`)
          setAccounts(data.data)
          console.log(data.data);
        } catch (error) {
          console.log(error);    
        }
      }
    
      const handleSelectedOptions = (users) => {
    
        const options = users.map((user) => {
          return {
            value: user.id,
            label: user.name,
          };
        });
        setOptions(options);
      };
      const handleSelectedFiliales = (filiales) => {
    
        const options = filiales.map((filiale) => {
          return {
            value: filiale.id,
            label: filiale.denomination,
          };
        });
        setOptionsFiliales(options);
      };
    
      
      const fetchFiliales = async () => {
        try {
            const response = await axios.get('http://localhost:3010/api/filiale/getAll')
            handleSelectedFiliales(response.data)
            setFiliales(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    
      const fetchUSers = async () => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.get(
              "http://localhost:3010/api/utilisateur/getOne",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const response = await axios.get('http://localhost:3010/api/utilisateur/getAll')
            const userList = response.data.filter((user)=>{
                return res.data.name !== user.name
            })
            handleSelectedOptions(userList)
            setUsers(userList)
            
        } catch (error) {
            console.log(error);
        }
    }
    
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
      const notifySameFiliale = () => {
        toast.error("Déja Membre", {
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
      const notifySameRole = () => {
        toast.error("Déja Sécrétaire", {
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
        toast.success("Compte Crée", {
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
    
    
    
      const handleUpdate = async (body) => {
        try {
           let validFiliale = false
           let validRole = false
            accounts.forEach((account) => {
                if(account.role === role){
                    validRole = true
                }
                if( account.FilialeId=== selectedFiliale){
                    validFiliale = true
                }
            })
            if(!validFiliale){
                if(!validRole){
                    const res = await axios.put(`http://localhost:3010/api/comptes/update/${compte.id}`,body)
                console.log(res);
                 notify()
                 setReload(!reload)
                 handleClose()
                }
                else{
                    notifySameRole()
                }
            }
            else{
                notifySameFiliale()
            }
        } catch (error) {
            console.log(error);
            notifyError()
        }
      }
    
    
      useEffect(()=>{
        fetchUSers()
        fetchFiliales()
        handleDetails(compte.FilialeId,compte.UtilisateurId)
    },[reload])
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
              <div className="custom-select">
                <p>Utilisateur :</p>
                <Select
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  styles={{ width: "100%" }}
                  options={options}
                  onChange={(e)=>{
                    setSelectedUser(e.value)
                    handleDetails(selectedFiliale,e.value)
                  }}
                  onBlur={(e)=>{
                    getAccountsByUser()
                  }}
                  placeholder="Choisir utilisateur"
                  value={utilisateur}
                />
              </div>
              <div className="custom-select">
                <p>Filiale :</p>
                <Select
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  styles={{ width: "100%" }}
                  options={optionsFiliales}
                  onChange={(e)=>{
                    setSelectedFiliale(e.value)
                    handleDetails(e.value,selectedUser)
                  }}
                  placeholder="Choisir filiale"
                  value={filiale}
                />
              </div>
              <div className="radio-input">
                <label>
                  <input
                    value="Sécrétaire"
                    name="value-radio"
                    id="value-1"
                    type="radio"
                    onChange={(e)=>setRole(e.target.value)}
                    checked={role === "Sécrétaire"}
                  />
                  <span>Sécrétaire</span>
                </label>
                <label>
                  <input
                    value="Administrateur"
                    name="value-radio"
                    id="value-2"
                    type="radio"
                    onChange={(e)=>setRole(e.target.value)}
                    checked={role === "Administrateur"}
                  />
                  <span>Admin</span>
                </label>
                <label>
                  <input
                    value="Actionnaire"
                    name="value-radio"
                    id="value-3"
                    type="radio"
                    onChange={(e)=>setRole(e.target.value)}
                    checked={role === "Actionnaire"}
                  />
                  <span>Actionnaire</span>
                </label>
                <label>
                  <input
                    value="Décideur"
                    name="value-radio"
                    id="value-3"
                    type="radio"
                    onChange={(e)=>setRole(e.target.value)}
                    checked={role === "Décideur"}
                  />
                  <span>Décideur</span>
                </label>
                <span className="selection"></span>
              </div>

              <div className="filialeButtons">
                <Button
                  className="addButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleUpdate({
                        FilialeId :selectedFiliale,
                        UtilisateurId : selectedUser,
                        role
                    })
                  }}
                >
                  Enregistrer
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

export default UpdateCompte