import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import axios from "axios";
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

const UpdateFiliale = ({ handleClose, open, filiale, reload, setReload }) => {
  const [denomination, setDenomination] = useState(filiale.denomination);
  const [type, setType] = useState(filiale.type);
  const [abreviation, setAbreviation] = useState(filiale.abreviation);
  const [adresse, setAdresse] = useState(filiale.adresse);
  const [directeurGeneral, setDirecteurGeneral] = useState(
    filiale.directeurGeneral
  );
  const [valeurNominale, setValeurNominale] = useState(filiale.valeurNominale);
  const [nombredeSiege, setNombredeSiege] = useState(filiale.nombredeSiege);
  const [identifiantUnique, setIdentifiantUnique] = useState(
    filiale.identifiantUnique
  );
  const [activitePrincipale, setActivitePrincipale] = useState(
    filiale.activitePrincipale
  );
  const [activiteAnnexe, setActiviteAnnexe] = useState(filiale.activiteAnnexe);
  const location = useLocation();
  const account = location.state.account;

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
    toast.success("Filiale Mis a Jour", {
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
          await axios.put(
            `http://localhost:3010/api/filiale/update/${filiale.id}`,
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
            {account.role === "Gestionnaire" ? (
              <div className="filiale-form">
                <div className="longInput">
                  <p>Dénomination :</p>
                  <input
                    type="text"
                    onChange={(e) => setDenomination(e.target.value)}
                    value={denomination}
                  />
                </div>
                <div className="type-abrev">
                  <div className="type">
                    <p>Type :</p>
                    <div className="typeRadio">
                      <div class="radio-button-container">
                        <div class="radio-button">
                          <input
                            type="radio"
                            class="radio-button__input"
                            id="radio1"
                            name="radio-group"
                            value="Filiale"
                            onChange={(e) => setType(e.target.value)}
                            checked={type === "Filiale"}
                          />
                          <label class="radio-button__label" for="radio1">
                            <span class="radio-button__custom"></span>
                            Filiale
                          </label>
                        </div>
                        <div class="radio-button">
                          <input
                            type="radio"
                            class="radio-button__input"
                            id="radio2"
                            name="radio-group"
                            value="Participation"
                            onChange={(e) => setType(e.target.value)}
                            checked={type === "Participation"}
                          />
                          <label class="radio-button__label" for="radio2">
                            <span class="radio-button__custom"></span>
                            Participation
                          </label>
                        </div>
                        <div class="radio-button">
                          <input
                            type="radio"
                            class="radio-button__input"
                            id="radio3"
                            name="radio-group"
                            value="Autre"
                            onChange={(e) => setType(e.target.value)}
                            checked={type === "Autre"}
                          />
                          <label class="radio-button__label" for="radio3">
                            <span class="radio-button__custom"></span>
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
                      value={abreviation}
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
                        value={adresse}
                      />
                    </div>
                    <div className="midFilialeSection">
                      <div className="shortInputsSection">
                        <div className="shortInput">
                          <p>Directeur Général :</p>
                          <input
                            type="text"
                            onChange={(e) =>
                              setDirecteurGeneral(e.target.value)
                            }
                            value={directeurGeneral}
                          />
                        </div>
                        <div className="shortInput">
                          <p>Valuer Nominale :</p>
                          <input
                            type="text"
                            onChange={(e) => setValeurNominale(e.target.value)}
                            value={valeurNominale}
                          />
                        </div>
                        <div className="shortInput">
                          <p>Identifiant Unique :</p>
                          <input
                            type="text"
                            onChange={(e) =>
                              setIdentifiantUnique(e.target.value)
                            }
                            value={identifiantUnique}
                          />
                        </div>
                      </div>
                      <div className="shortInputsSection">
                        <div className="shortInput">
                          <p>Nombre de siéges :</p>
                          <input
                            type="text"
                            onChange={(e) => setNombredeSiege(e.target.value)}
                            value={nombredeSiege}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="longInput">
                      <p>Activité Principale :</p>
                      <input
                        type="text"
                        onChange={(e) => setActivitePrincipale(e.target.value)}
                        value={activitePrincipale}
                      />
                    </div>
                    <div className="longInput">
                      <p>Activité(s) annexe(s) :</p>
                      <input
                        type="text"
                        onChange={(e) => setActiviteAnnexe(e.target.value)}
                        value={activiteAnnexe}
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
                      handleUpdate({
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
                    Enregistrer
                  </Button>
                  <Button onClick={handleClose} className="addButton">
                    Annuler
                  </Button>
                </div>
              </div>
            ) : (
              <div className="filiale-form">
                <div className="longInput">
                  <p>Dénomination :</p>
                  <input
                    type="text"
                    onChange={(e) => setDenomination(e.target.value)}
                    value={denomination}
                    disabled
                  />
                </div>
                <div className="type-abrev">
                  <div className="type">
                    <p>Type :</p>
                    <div className="typeRadio">
                      <div class="radio-button-container">
                        <div class="radio-button">
                          <input
                            type="radio"
                            class="radio-button__input"
                            id="radio1"
                            name="radio-group"
                            value="Filiale"
                            onChange={(e) => setType(e.target.value)}
                            checked={type === "Filiale"}
                            disabled
                            
                          />
                          <label class="radio-button__label" for="radio1">
                            <span class="radio-button__custom"></span>
                            Filiale
                          </label>
                        </div>
                        <div class="radio-button">
                          <input
                            type="radio"
                            class="radio-button__input"
                            id="radio2"
                            name="radio-group"
                            value="Participation"
                            onChange={(e) => setType(e.target.value)}
                            checked={type === "Participation"}
                            disabled
                          />
                          <label class="radio-button__label" for="radio2">
                            <span class="radio-button__custom"></span>
                            Participation
                          </label>
                        </div>
                        <div class="radio-button">
                          <input
                            type="radio"
                            class="radio-button__input"
                            id="radio3"
                            name="radio-group"
                            value="Autre"
                            onChange={(e) => setType(e.target.value)}
                            checked={type === "Autre"}
                            disabled
                          />
                          <label class="radio-button__label" for="radio3">
                            <span class="radio-button__custom"></span>
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
                      value={abreviation}
                      disabled
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
                        value={adresse}
                        disabled
                      />
                    </div>
                    <div className="midFilialeSection">
                      <div className="shortInputsSection">
                        <div className="shortInput">
                          <p>Directeur Général :</p>
                          <input
                            type="text"
                            onChange={(e) =>
                              setDirecteurGeneral(e.target.value)
                            }
                            value={directeurGeneral}
                            disabled
                          />
                        </div>
                        <div className="shortInput">
                          <p>Valuer Nominale :</p>
                          <input
                            type="text"
                            onChange={(e) => setValeurNominale(e.target.value)}
                            value={valeurNominale}
                            disabled
                          />
                        </div>
                        <div className="shortInput">
                          <p>Identifiant Unique :</p>
                          <input
                            type="text"
                            onChange={(e) =>
                              setIdentifiantUnique(e.target.value)
                            }
                            value={identifiantUnique}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="shortInputsSection">
                        <div className="shortInput">
                          <p>Nombre de siéges :</p>
                          <input
                            type="text"
                            onChange={(e) => setNombredeSiege(e.target.value)}
                            value={nombredeSiege}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="longInput">
                      <p>Activité Principale :</p>
                      <input
                        type="text"
                        onChange={(e) => setActivitePrincipale(e.target.value)}
                        value={activitePrincipale}
                        disabled
                      />
                    </div>
                    <div className="longInput">
                      <p>Activité(s) annexe(s) :</p>
                      <input
                        type="text"
                        onChange={(e) => setActiviteAnnexe(e.target.value)}
                        value={activiteAnnexe}
                        disabled
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
                
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UpdateFiliale;
