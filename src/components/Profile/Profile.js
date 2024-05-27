import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Profile = () => {
    const [user,setUser] = useState({})
    const [image,setImage] = useState("")
    const [matricule,setMatricule] = useState("")
    const [nom,setNom] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [cin,setCin] = useState("")
    const [error,setError] = useState({})



    const notifyError = () => {
        toast.error("check your Credentials", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };

    const notify = () => {
        toast.success("Profil mis à jour", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };

     


    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem("token")
            if(token){
                const res = await axios.put(
                    `http://localhost:3010/api/utilisateur/update/${user.id}`,
                    {
                        photo : image,
                        cin : cin,
                        name : nom,
                        matricule : matricule,
                        email : email,
                        phone : mobile
                    }
                )
                notify()
            }
        } catch (error) {
            notifyError()
            console.log(error);
        }
    }


    const getUser = async () => {
        try {
          const token = localStorage.getItem('token')
          const res = await axios.get(
            "http://localhost:3010/api/utilisateur/getOne",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setImage(res.data.photo)
          setCin(res.data.cin)
          setNom(res.data.name)
          setMatricule(res.data.matricule)
          setEmail(res.data.email)
          setMobile(res.data.phone)
          setUser(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      const profileUpload = async (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "oztadvnr");
        await axios
          .post("https://api.cloudinary.com/v1_1/dl4qexes8/upload", formData)
          .then((response) => {
            setImage(response.data["secure_url"]);
          })
          .catch((error) => {
            throw error;
          });
      };

      useEffect(()=>{
        getUser()
      },[])


    
    
     

  return (
    <div className="profile">
      <div className="profileImage">
        <input type="file" onChange={(e)=>profileUpload(e)}/>
        <img src={image} alt=""  />
      </div>
      <div className="demiFieldsContainer">
        <div className="inputContainer">
          <p>Nom</p>
          <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
        </div>
        <div className="inputContainer">
          <p>Matricule</p>
          <input type="text" value={matricule} onChange={(e)=>setMatricule(e.target.value)} />
        </div>
      </div>
      <div className="demiFieldsContainer">
        <div className="inputContainer">
          <p>CIN</p>
          <input type="text" value={cin} onChange={(e)=>setCin(e.target.value)}  />
         
        </div>
        <div className="inputContainer">
          <p>Email</p>
          <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
      </div>
      <div className="longInputContainer">
        <p>Mobile</p>
        <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}  />
      </div>
      <ToastContainer/>
      <div className="profileSubmit" onClick={(e)=>{
        e.preventDefault();
        handleUpdate()
      }}>
        <p>Enregistrer</p>
      </div>
    </div>
  );
};

export default Profile;
