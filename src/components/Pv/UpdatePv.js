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
import "./Pv.css"
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

const UpdatePv = () => {
  return (
    <div>UpdatePv</div>
  )
}

export default UpdatePv