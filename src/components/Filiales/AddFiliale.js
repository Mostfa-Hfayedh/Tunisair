import React, { useState } from "react";
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
  width: "70%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddFiliale = ({ reload, setReload }) => {
  const [denomination, setDenomination] = useState("");
  const [type, setType] = useState("");
  const [abreviation, setAbreviation] = useState("");
  const [adresse, setAdresse] = useState("");
  const [directeurGeneral, setDirecteurGeneral] = useState("");
  const [valeurNominale, setValeurNominale] = useState("");
  const [nombredeSiege, setNombredeSiege] = useState("");
  const [identifiantUnique, setIdentifiantUnique] = useState("");
  const [activitePrincipale, setActivitePrincipale] = useState("");
  const [activiteAnnexe, setActiviteAnnexe] = useState("");
  const location = useLocation();
  const account = location.state.account;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const handleAdd = async (body) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        if (
          denomination &&
          type &&
          abreviation &&
          adresse &&
          directeurGeneral &&
          valeurNominale &&
          nombredeSiege &&
          identifiantUnique &&
          activitePrincipale &&
          activiteAnnexe
        ) {
          const res = await axios.post(
            "http://localhost:3010/api/filiale/create",
            body
          );
          notify();
          handleClose();
          setReload(!reload);
        } else {
          notifyError();
        }
      }
    } catch (error) {
      console.log(error);
      notifyError();
    }
  };

  return (
    <div>
      {account.role === "Gestionnaire" ?
        <Button onClick={handleOpen} className="addButton">
          + Ajouter
        </Button>:<></>
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
            <div className="filiale-form">
              <div className="longInput">
                <p>Dénomination :</p>
                <input
                  type="text"
                  onChange={(e) => setDenomination(e.target.value)}
                />
              </div>
              <div className="type-abrev">
                <div className="type">
                  <p>Type :</p>
                  <div className="typeRadio">
                    <div className="radio-button-container">
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio1"
                          name="radio-group"
                          value="Filiale"
                          onChange={(e) => setType(e.target.value)}
                        />
                        <label className="radio-button__label" htmlFor="radio1">
                          <span className="radio-button__custom"></span>
                          Filiale
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio2"
                          name="radio-group"
                          value="Participation"
                          onChange={(e) => setType(e.target.value)}
                        />
                        <label className="radio-button__label" htmlFor="radio2">
                          <span className="radio-button__custom"></span>
                          Participation
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          className="radio-button__input"
                          id="radio3"
                          name="radio-group"
                          value="Autre"
                          onChange={(e) => setType(e.target.value)}
                        />
                        <label className="radio-button__label" htmlFor="radio3">
                          <span className="radio-button__custom"></span>
                          Autre
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="abreviation">
                  <p>Abréviation :</p>
                  <input
                    type="text"
                    onChange={(e) => setAbreviation(e.target.value)}
                  />
                </div>
              </div>
              {type !== "Autre" ? (
                <>
                  <div className="longInput">
                    <p>Addresse :</p>
                    <input
                      type="text"
                      onChange={(e) => setAdresse(e.target.value)}
                    />
                  </div>
                  <div className="midFilialeSection">
                    <div className="shortInputsSection">
                      <div className="shortInput">
                        <p>Directeur Général :</p>
                        <input
                          type="text"
                          onChange={(e) => setDirecteurGeneral(e.target.value)}
                        />
                      </div>
                      <div className="shortInput">
                        <p>Valuer Nominale :</p>
                        <input
                          type="text"
                          onChange={(e) => setValeurNominale(e.target.value)}
                        />
                      </div>
                      <div className="shortInput">
                        <p>Identifiant Unique :</p>
                        <input
                          type="text"
                          onChange={(e) => setIdentifiantUnique(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="shortInputsSection">
                      <div className="shortInput">
                        <p>Nombre de siéges :</p>
                        <input
                          type="text"
                          onChange={(e) => setNombredeSiege(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="longInput">
                    <p>Activité Principale :</p>
                    <input
                      type="text"
                      onChange={(e) => setActivitePrincipale(e.target.value)}
                    />
                  </div>
                  <div className="longInput">
                    <p>Activité(s) annexe(s) :</p>
                    <input
                      type="text"
                      onChange={(e) => setActiviteAnnexe(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="filialeButtons">
                <Button
                  className="addButton"
                  onClick={(e) => {
                    handleAdd({
                      denomination,
                      type,
                      abreviation,
                      adresse,
                      directeurGeneral,
                      valeurNominale,
                      identifiantUnique,
                      nombredeSiege,
                      activitePrincipale,
                      activiteAnnexe,
                    });
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
  );
};

export default AddFiliale;
