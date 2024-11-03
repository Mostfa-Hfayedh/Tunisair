import { BarChart, PieChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useLocation } from "react-router-dom";
const animatedComponents = makeAnimated();

const options = [
  { label: "Tout l'année", value: null },
  { label: "Janvier", value: "Jan" },
  { label: "Février", value: "Feb" },
  { label: "Mars", value: "Mar" },
  { label: "Avril", value: "Apr" },
  { label: "Mai", value: "May" },
  { label: "Juin", value: "Jun" },
  { label: "Juillet", value: "Jul" },
  { label: "Août", value: "Aug" },
  { label: "Septembre", value: "Sep" },
  { label: "Octobre", value: "Oct" },
  { label: "Novembre", value: "Nov" },
  { label: "Décembre", value: "Dec" },
];

const Analyses = () => {
  const [reunions, setReunions] = useState([]);
  const [reload, setReload] = useState(false);
  const [selected , setSelected] = useState({ label: "Tout l'année", value: null })
  const [users,setUsers] = useState([])
  const [presences,setPresences] = useState([])
  const [absences,setAbsences] = useState ([])
  const location = useLocation()
  const account = location.state.account

  const fetchReunions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3010/api/reunion/getReunionByFiliale/${account.FilialeId}`
      );
      setReunions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const prepStat = (data) => {
    let users = []
    let presences = []
    let absences = []
    for (let stat of data) {
      users.push(stat.name)
      presences.push(stat.presence)
      absences.push(stat.absence)
    }
    setAbsences(absences)
    setPresences(presences)
    setUsers(users)
  }

  const fetchStats = async () => {
    try {
      const response = await axios.post("http://localhost:3010/api/utilisateur/getAnalyses",{
          filiale : account.FilialeId ,
          month : selected.value
      })
      prepStat(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const reunionTerminé = reunions.filter(
    (reunion) => reunion.etat === "Terminé"
  );
  const reunionEnCours = reunions.filter(
    (reunion) => reunion.etat === "En cours"
  );
  const reunionAnnulé = reunions.filter((reunion) => reunion.etat === "Annulé");
  const reunionPrévue = reunions.filter((reunion) => reunion.etat === "Prévue");

  useEffect(() => {
    fetchReunions();
    fetchStats()
  }, [reload]);

  return (
    <div className="analyses">
      <div className="analyses-reunion">
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: reunionPrévue?.length,
                  label: "Prévue",
                  color: "lightblue",
                },
                {
                  id: 1,
                  value: reunionEnCours?.length,
                  label: "En Cours",
                  color: "#6f92b4",
                },
                {
                  id: 2,
                  value: reunionAnnulé?.length,
                  label: "Annulé",
                  color: "#3D90E3",
                },
                {
                  id: 3,
                  value: reunionTerminé?.length,
                  label: "Terminé",
                  color: "#ccc",
                },
              ],
            },
          ]}
          width={400}
          height={200}
        />
        <div className="progress-section">
          <p>Reunions terminés</p>
          <ProgressBar
            completed={
              isNaN(reunionTerminé.length / reunions?.length)
                ? 0
                : (reunionTerminé.length / reunions?.length).toFixed(2) * 100
            }
            bgColor="#3D90E3"
            className="progress"
          />
        </div>
      </div>
      <div className="analyses-presences">
          <p style={{color : "#3D90E3" , fontSize : "30px" , fontWeight : "500"}}>Statistiques de présences</p>
        <div className="analyses-presences-upper">
              <p className="mois">Mois :</p>
          <div>
              <Select
                closeMenuOnSelect={true}
                components={animatedComponents}
                styles={{ width: "100%" }}
                options={options}
                onChange={(e)=>{
                  setSelected(e)
                  setReload(!reload)
                }}
                value={selected}
              />
            </div>
              <div className="map-key">
                <div className="presence-key"><span>___</span><p>Présences</p></div>
                <div className="absence-key"><span>___</span><p>Absences</p></div>
              </div>
        </div>
        <BarChart
          xAxis={[
            { scaleType: "band", data: users },
          ]}
          series={[{ data: absences , color : "#6f92b4" }, { data: presences , color : "#3D90E3" }]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Analyses;
