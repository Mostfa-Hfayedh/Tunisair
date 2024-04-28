const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const Presence = await db.Presence.findAll({})
            res.json(Presence)
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const Presence = await db.Presence.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(Presence)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const Presence = await db.Presence.create(req.body)
            res.json(Presence)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const Presence = await db.Presence.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(Presence)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const Presence = await db.Presence.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(Presence)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getPresenceByReunion:async(req, res)=>{
        try {
            const presence = await db.Presence.findAll({where : {ReunionId : req.params.id}})
            res.json(presence)
        } catch (error) {
            console.log(error);
        }
    },

}