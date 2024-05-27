import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();



  const handleLogin = async (body) => {
    try {
      const data = await axios.post(
        "http://localhost:3010/api/utilisateur/login",
        body
      );
      localStorage.setItem("token", data.data.token);
      navigate("/comptes" , {state : {userId : data.data.UtilisateurId}});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="form2">
        <div className="title">Connexion</div>
        <div className="subtitle">Bienvenue à Tunisair</div>

        <div className="input-container ic1">
          <input
            placeholder=""
            type="text"
            className="input"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label className="iLabel" for="email">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            placeholder=""
            type="password"
            className="input"
            id="firstname"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="cut"></div>
          <label className="iLabel" for="firstname">
            Password
          </label>
        </div>

        <button
          className="submit"
          type="text"
          onClick={(e) => {
            e.preventDefault();
            handleLogin({
              email: email,
              password: password,
            });
          }}
        >
           se connecter
        </button>
      </div>
    </div>
  );
};

export default Login;
