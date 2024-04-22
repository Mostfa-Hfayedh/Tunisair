const db = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const Allutilisateur = await db.Utilisateur.findAll()
            res.json(Allutilisateur)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
    ,
    register : async (req, res) => {
        try {
            bcrypt.hash(req.body.password, 10)
                .then((hashedPass) => {
                    db.Utilisateur.create({
                        ...req.body,
                        password: hashedPass
                    })
                        .then((result) =>
                            res.status(201).json({
                                message: "Utilisateur Created Successfully",
                                result,
                            })
                        )
                        .catch((error) => {
                            res.status(500).send({
                                message: "Error creating Utilisateur",
                                error,
                            });
                        });
                });
        } catch (error) {
            res.status(500).send({
                message: "Password was not hashed successfully",
                error,
            });
        }
    },


    passCheck : async (req,res) =>{
        try {
            const Utilisateur = await db.Utilisateur.findOne({where:{email:req.body.email}})
            bcrypt.compare(req.body.password, Utilisateur.password)
               .then((passCheck) => {
                    if (!passCheck) {
                        res.status(200).send({
                            message: "Password Incorrect", 
                            
                        });
                    }
                    else {
                        res.status(200).json({
                            message: ""
                        });
                    }
                    
                })
        } catch (error) {
            console.log(error);
        }
    },

    login  : async (req, res) => {
        db.Utilisateur.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((Utilisateur) => {
                console.log(Utilisateur);
                bcrypt
                    .compare(req.body.password, Utilisateur.password)
                    .then((passCheck) => {
                        if (!passCheck) {
                            res.status(400).send({
                                message: "Passwords does not match", 
                            
                            });
                        }
                        else {
                            const Token = jwt.sign(
                                {
                                    UtilisateurId: Utilisateur.id,
                                    email: Utilisateur.email,
                                },
                                "secretKeyForJWT@2024",
                                {expiresIn : "24h"}
                            );
                            res.status(200).json({
                                message: "Login Successfull",
                                UtilisateurId: Utilisateur.id,
                                token: Token
                            });
                        }
                        
                    })
                    .catch((error) => {
                        res.status(400).send({
                            message: "Error creating token",
                            error,
                        });
                    });
            })
            .catch((error) => {
                res.status(404).send({
                    message: "Email not found",
                    error,
                });
            });
    },
    getOne : async (req, res) => {
        res.status(200).send(req.user)
    },
    remove : async (req, res) => {
        try {
            await db.Utilisateur.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).send({
                message: "Utilisateur Deleted Successfully",
            });
        } catch (error) {
            res.status(500).send({
                message: "Error deleting Utilisateur",
                error,
            });
        }
    },
    update : async (req, res) => {
        try {
            await db.Utilisateur.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).send({
                message: "Utilisateur Updated Successfully",
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating Utilisateur",
                error,
            });
        }
    }
    
}