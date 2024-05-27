const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllComptes = await db.Comptes.findAll({})
            res.json(AllComptes)
        } catch (error) {
            console.log(error)
        }
    },
    getOne : async(req, res)=>{
        try {
            const Compte = await db.Comptes.findByPk(req.params.id)
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    },
    create : async(req, res)=>{
        try {
            const Compte = await db.Comptes.create(req.body)
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    },
    update : async(req, res)=>{
        try {
            const Compte = await db.Comptes.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    },
    remove : async(req, res)=>{
        try {
            const Compte = await db.Comptes.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    },
    getAllCompteByUser : async (req, res)=>{
        try {
            allComptes = await db.Comptes.findAll({
                where : { UtilisateurId : req.params.id}
            })
            res.json(allComptes)
        } catch (error) {
            console.log(error)
        }
    },
    getAllCompteByFiliale : async (req,res) => {
        try {
            const allComptes = await db.Comptes.findAll({
                where : { FilialeId : req.params.id}
            })
            res.json(allComptes)
        } catch (error) {
            console.log(error)
        }
    },
    getUsersById : async (req, res) => {
        try {
            let users = []
            for ( key in req.body) {
                const user = await db.Utilisateur.findByPk(req.body[key])
                users.push(user)
            }
            res.json(users)
        } catch (error) {
            console.log(error)
        }
    },
    getComptesByUserAndFiliale : async (req,res) => {
        try {
            const allComptes = await db.Comptes.findAll({
                where : { UtilisateurId : req.body.user, FilialeId : req.body.filiale}
            })
            res.json(allComptes)
        } catch (error) {
            console.log(error)
        }
    },
    deleteCompteByUser : async (req,res) => { 
        try {
            const comptes = await db.Comptes.destroy({where : { UtilisateurId : req.params.id}}) 
            res.json(comptes)
        } catch (error) {
            console.log(error);
        }
    },
    deleteCompteByFiliale : async (req,res) => { 
        try {
            const comptes = await db.Comptes.destroy({where : { FilialeId : req.params.id}}) 
            res.json(comptes)
        } catch (error) {
            console.log(error);
        }
    },
}