import { faBookOpen, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UpdateFiliale from "./UpdateFiliale";
import DeleteFiliale from "./DeleteFiliale";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

const OneFiliale = ({ filiale, reload, setReload }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const location = useLocation();
  const account = location.state.account;

  return (
    <div className="one-filiale">
      <p>Denomination : {filiale.denomination}</p>
      <UpdateFiliale
        handleClose={handleCloseUpdate}
        open={openUpdate}
        filiale={filiale}
        reload={reload}
        setReload={setReload}
      />
      <p>Abréviation : {filiale.abreviation}</p>
      <p>Type : {filiale.type}</p>
      <DeleteFiliale
        handleClose={handleCloseDelete}
        open={openDelete}
        filiale={filiale}
        reload={reload}
        setReload={setReload}
      />
      <div className="one-filiale-buttons">
        {account.role === "Gestionnaire" ? (
          <FontAwesomeIcon
            icon={faTrash}
            className="one-filiale-icons"
            onClick={handleOpenDelete}
          />
        ) : (
          <></>
        )}
        {account.role === "Gestionnaire" ? (
          <FontAwesomeIcon
            icon={faEdit}
            className="one-filiale-icons"
            onClick={handleOpenUpdate}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBookOpen}
            className="one-filiale-icons"
            onClick={handleOpenUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default OneFiliale;
