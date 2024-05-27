const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const reunions = await db.Reunion.findAll({})
            res.json(reunions)
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const Reunion = await db.Reunion.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(Reunion)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const Reunion = await db.Reunion.create(req.body)
            res.json(Reunion)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const Reunion = await db.Reunion.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(Reunion)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const Reunion = await db.Reunion.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(Reunion)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getReunionByFiliale : async (req,res) => {
        try {
            const reunions = await db.Reunion.findAll({
                where:{
                    FilialeId:req.params.id
                }
            })
            res.json(reunions)
        } catch (error) {
            console.log(error)
            
        }
    },
    deleteReunionByFiliale : async (req, res) => {
        try {
            const reunions = await db.Reunion.destroy({where:{FilialeId:req.params.id}})
            res.json(reunions)
        } catch (error) {
            console.log(error);
        }
    }
}