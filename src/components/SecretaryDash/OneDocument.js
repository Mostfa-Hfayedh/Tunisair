import { faGavel, faShare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteDocument from "./DeleteDocument";

const OneDocument = ({ reload, setReload, document }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const account = location.state.account;

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenVote = () => setOpenVote(true);
  const handleCloseVote = () => setOpenVote(false);

  return (
    <div className="one-filiale">
      <p> Titre : {document.titre}</p>
      <DeleteDocument
        handleClose={handleCloseDelete}
        open={openDelete}
        reload={reload}
        setReload={setReload}
        document={document}
      />
      <div className="one-filiale-buttons">
      <FontAwesomeIcon
            icon={faShare}
            className="one-filiale-icons"
          />
        {account.role === "Sécrétaire" ? (
          <FontAwesomeIcon
            icon={faTrash}
            className="one-filiale-icons"
            onClick={handleOpenDelete}
          />
        ) : null}
      </div>
    </div>
  );
};

export default OneDocument;
