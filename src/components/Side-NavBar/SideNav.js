import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBuilding,
  faCircleUser,
  faFile,
  faMessage,
  faRightFromBracket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SideNav = ({ account , user}) => {
  const navigate = useNavigate();

  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/6/60/Tunis_Air_Club.png"
          alt=""
        />
        <p>Tunisair</p>
      </div>
      <div className="sidenav-options">
        <div
          className="sidenav-option"
          onClick={(e) => {
            e.preventDefault();
            navigate("profile", { state: { account: account } });
          }}
        >
          <FontAwesomeIcon className="icons" icon={faCircleUser} />
          <p>Profile</p>
        </div>
        {account.role === "Gestionnaire" ? (
          <>
            {" "}
            <div
              className="sidenav-option"
              onClick={(e) => {
                e.preventDefault();
                navigate("utilisateurs", { state: { account: account } });
              }}
            >
              <FontAwesomeIcon className="icons" icon={faUsers} />
              <p>Utilisateurs</p>
            </div>
            <div
              className="sidenav-option"
              onClick={(e) => {
                e.preventDefault();
                navigate("filiales", { state: { account: account } });
              }}
            >
              <FontAwesomeIcon className="icons" icon={faBuilding} />
              <p>Filiales</p>
            </div>
            <div
              className="sidenav-option"
              onClick={(e) => {
                e.preventDefault();
                navigate("comptes", { state: { account: account } });
              }}
            >
              <FontAwesomeIcon className="icons" icon={faAddressBook} />
              <p>Comptes</p>
            </div>{" "}
          </>
        ) : (
          <></>
        )}
        {account.role === "Sécrétaire" ? (
          <>
            <div
              className="sidenav-option"
              onClick={(e) => {
                e.preventDefault();
                navigate("reunions", { state: { account: account } });
              }}
            >
              <FontAwesomeIcon className="icons" icon={faUsers} />
              <p>Réunions</p>
            </div>
            <div className="sidenav-option" 
            onClick={(e) => {
              e.preventDefault();
              navigate("Pv", { state: { account: account } });
            }}
            >
              <FontAwesomeIcon className="icons" icon={faFile} />
              <p>PV</p>
            </div>
          </>
        ) : (
          <></>
        )}
        {account.role === "Actionnaire" ? (
          <>
            <div className="sidenav-option"
              onClick={(e) => {
                e.preventDefault();
                navigate("invitation", { state: { account: account } });
              }}>
              <FontAwesomeIcon className="icons" icon={faMessage} />
              <p>Invitaions</p>
            </div>
          </>
        ) : (
          <></>
        )}
        {account.role === "Décideur" ? (
          <>
            <div className="sidenav-option">
              <FontAwesomeIcon className="icons" icon={faBuilding} />
              <p>Filiale</p>
            </div>
            <div className="sidenav-option"
            onClick={(e) => {
              e.preventDefault();
              navigate("Pv", { state: { account: account } });
            }}
            >
              <FontAwesomeIcon className="icons" icon={faFile} />
              <p>PV</p>
            </div>
            <div className="sidenav-option">
              <FontAwesomeIcon className="icons" icon={faUsers} />
              <p>Réunions</p>
            </div>
          </>
        ) : (
          <></>
        )}
        {account.role === "Administrateur" ? (
          <>
            <div className="sidenav-option"
            onClick={(e) => {
              e.preventDefault();
              navigate("invitation", { state: { account: account } });
            }}
            >
              <FontAwesomeIcon className="icons" icon={faMessage} />
              <p>Invitations</p>
            </div>
            <div className="sidenav-option">
              <FontAwesomeIcon className="icons" icon={faFile} />
              <p>PV</p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div
        className="sidenav-option"
        onClick={(e) => {
          e.preventDefault();
          
          navigate("/comptes" ,  {state : {userId : user.id}});
        }}
      >
        <FontAwesomeIcon className="icons" icon={faRightFromBracket} />
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default SideNav;
