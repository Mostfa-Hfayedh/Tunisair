const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const invitation = await db.Invitation.findAll({})
            res.json(invitation)
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const invitation = await db.Invitation.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(invitation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const invitation = await db.Invitation.create(req.body)
            res.json(invitation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const invitation = await db.Invitation.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(invitation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const invitation = await db.Invitation.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(invitation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getByCompte : async (req, res)=>{
        try {
            const invitation = await db.Invitation.findAll({
                where:{
                    CompteId:req.params.id
                }
            })
            res.json(invitation)
        } catch (error) {
            console.log(error);
        }
    }, 
    getByReunion : async (req, res)=>{
        try {
            const invitation = await db.Invitation.findAll({where:{ReunionId:req.params.id}})
            res.json(invitation)
        } catch (error) {
            console.log(error);
        }
    }
}