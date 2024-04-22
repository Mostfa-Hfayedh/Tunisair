import React, { useState } from 'react'
import "./Register.css"
import axios from 'axios'


const Register = () => {
    const [matricule,setMatricule] = useState("")
    const [sexe,setSexe] = useState("")
    const [mobile,setMobile] = useState("")
    const [tunis,setTunis] = useState(false)
    const [legal,setLegal] = useState(false)
    const [cin,setCin] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleAdd = async (body) => {
        try {
            await axios.post("http://localhost:3010/api/utilisateur/register",body)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login'>
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>

                <div className="input-container-big">
                    <div className="input-container-left">
                        <div className="input-container ic1">
                            <input placeholder="" type="text" className="input" id="matricule" onChange={(e)=>setMatricule(e.target.value)} />
                            <div className="cut cut-short"></div>
                            <label className="iLabel" for="matricule">Matricule</label>
                        </div>
                        <div className="input-container ic2">
                            <input placeholder="" type="text" className="input" id="name" onChange={(e)=>setName(e.target.value)}/>
                            <div className="cut"></div>
                            <label className="iLabel" for="name">Nom</label>
                        </div>
                        <div className="input-container ic2">
                            <input placeholder="" type="text" className="input" id="sexe" onChange={(e)=>{
                                setSexe(e.target.value)
                            }}/>
                            <div className="cut"></div>
                            <label className="iLabel" for="sexe">Sexe</label>
                        </div>
                        <div className="input-container ic2">
                            <input placeholder="" type="text" className="input" id="phone" onChange={(e)=>{
                                setMobile(e.target.value)
                            }} />
                            <div className="cut"></div>
                            <label className="iLabel" for="phone">Mobile</label>
                        </div>
                    </div>
                    <div className="input-container-right">
                    <div className="input-container ic1">
                            <input placeholder="" type="text" className="input" id="matricule" onChange={(e)=>setEmail(e.target.value)} />
                            <div className="cut cut-short"></div>
                            <label className="iLabel" for="matricule" >Email</label>
                        </div>
                    <div className="input-container ic1">
                            <input placeholder="" type="password" className="input" id="matricule" onChange={(e)=>setPassword(e.target.value)} />
                            <div className="cut cut-short"></div>
                            <label className="iLabel" for="matricule" >Email</label>
                        </div>
                        <div className='checkSection'>
                            <p>Personnel tunisair :</p>
                            <label class="switch">
                                <input type="checkbox" checked={tunis} onChange={(e)=>{
                                    setTunis(!tunis)
                                }}/>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div className='checkSection'>
                            <p>Représantant Légal :</p>
                            <label class="switch">
                                <input type="checkbox" checked={legal} onChange={(e)=>{
                                    setLegal(!legal)
                                }} />
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div className='checkSection'>
                            <p>CIN :</p>
                            <input type='file' className='file' />
                        </div>
                    </div>
                </div>

                <div className="noAccount">
                    <p >Vous avez un compte ?</p><p className='goRegister'>Connexion!</p>
                </div>

                <button className="submit" type="text" onClick={(e)=>{
                    e.preventDefault();
                    handleAdd({
                        name,
                        matricule,
                        sexe,
                        phone:mobile,
                        cin,
                        personnelTunisair:tunis,
                        representantLegal:legal,
                        email,
                        password
                    })
                }} >enregister</button>
            </div>
        </div>
    )
}

export default Register