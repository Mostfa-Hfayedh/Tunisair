import './App.css';
import Login from './components/Login/Login';
import {Route,Routes} from "react-router-dom"
import Compte from './components/Compte/Compte';
import GestionnaireDash from './components/GestionnaireDash/GestionnaireDash';
import Profile from './components/Profile/Profile';
import Filiales from './components/Filiales/Filiales';
import Utilisateur from './components/Utilisateurs/Utilisateur';
import Comptes from './components/HandleComptes/Comptes';
import ActionnaireDash from './components/ActionnaireDash/ActionnaireDash';
import SecretaryDash from './components/SecretaryDash/SecretaryDash';
import Reunions from './components/Reunions/Reunions';
import ReunionPlat from './components/SecretaryDash/ReunionPlat';
import Invitation from './components/Invitation/Invitation';
import Pv from './components/Pv/Pv';
import Refereniel from './components/Refereniel/Refereniel';
import AdminDash from './components/AdminDash/AdminDash';
import DecideurDash from './components/DecideurDash/DecideurDash';
import Analyses from './components/SecretaryDash/Analyses';
import Imprimer from './components/Imprimer/Imprimer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/comptes' Component={Compte}/>
        <Route path='/gestionnaireDash' Component={GestionnaireDash}>
            <Route path='profile' Component={Profile}/>
            <Route path='filiales' Component={Filiales}/>
            <Route path='utilisateurs' Component={Utilisateur}/>
            <Route path='comptes' Component={Comptes}/>
            <Route path='refereniel' Component={Refereniel}/>
        </Route>
        <Route path='/actionnaireDash' Component={ActionnaireDash}>
            <Route path='profile' Component={Profile}/>
            <Route path='invitation' Component={Invitation}/>
            <Route path='reunionPlat' Component={ReunionPlat}/>
            <Route path='refereniel' Component={Refereniel}/>
        </Route>
        <Route path='/secretaireDash' Component={SecretaryDash}>
            <Route path='profile' Component={Profile}/>
            <Route path='reunions' Component={Reunions}/> 
            <Route path='reunionPlat' Component={ReunionPlat}/>
            <Route path='Pv' Component={Pv}/>
            <Route path='refereniel' Component={Refereniel}/>
            <Route path='analyses' Component={Analyses}/>
        </Route>
        <Route path='/adminDash' Component={AdminDash}>
          <Route path='profile' Component={Profile}/>
          <Route path='invitation' Component={Invitation}/>
          <Route path='reunionPlat' Component={ReunionPlat}/>
          <Route path='refereniel' Component={Refereniel}/>
          <Route path='Pv' Component={Pv}/>
          <Route path='analyses' Component={Analyses}/>
        </Route>
        <Route path='/decideurDash' Component={DecideurDash}>
          <Route path='profile' Component={Profile}/>
          <Route path='invitation' Component={Invitation}/>
          <Route path='reunionPlat' Component={ReunionPlat}/>
          <Route path='refereniel' Component={Refereniel}/>
          <Route path='filiales' Component={Filiales}/>
        </Route>
        <Route path='imprimer' Component={Imprimer}/>

      </Routes>
    </div>
  );
}

export default App;
