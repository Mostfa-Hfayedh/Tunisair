import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {Route,Routes} from "react-router-dom"
import Compte from './components/Compte/Compte';
import GestionnaireDash from './components/GestionnaireDash/GestionnaireDash';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/comptes' Component={Compte}/>
        <Route path='/gestionnaireDash' Component={GestionnaireDash}/>

      </Routes>
    </div>
  );
}

export default App;
