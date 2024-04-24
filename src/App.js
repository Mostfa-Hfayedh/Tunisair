import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {Route,Routes} from "react-router-dom"
import Compte from './components/Compte/Compte';
import GestionnaireDash from './components/GestionnaireDash/GestionnaireDash';
import Profile from './components/Profile/Profile';
import Filiales from './components/Filiales/Filiales';
import Utilisateur from './components/Utilisateurs/Utilisateur';
import Comptes from './components/HandleComptes/Comptes';

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
        </Route>

      </Routes>
    </div>
  );
}

export default App;
