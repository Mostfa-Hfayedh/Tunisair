import { faEdit, faTrash, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import DeleteRefereniel from "./DeleteRefereniel";

const OneRefereniel = ({ refereniel, reload, setReload, account }) => {
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const openNewWindow = (Document) => {
    window.open(Document, "_blank");
  };

  return (
    <div className="one-filiale">
      <p>Titre : {refereniel.Titre} </p>
      <p>date : {refereniel.Date.substring(0, 10)} </p>
      <DeleteRefereniel
        handleClose={handleCloseDelete}
        open={openDelete}
        refereniel={refereniel}
        reload={reload}
        setReload={setReload}
      />
      <div className="one-filiale-buttons">
        {account.role === "Sécrétaire" ? (
          <FontAwesomeIcon
            icon={faTrash}
            className="one-filiale-icons"
            onClick={handleOpenDelete}
          />
        ) : (
          <></>
        )}
        <FontAwesomeIcon
          icon={faShare}  
          className="one-filiale-icons"
          onClick={(e) => {
            openNewWindow(refereniel.Document);
          }}
        />
      </div>
    </div>
  );
};

export default OneRefereniel;
