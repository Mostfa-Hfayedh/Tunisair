const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllRefereniels = db.Refereniel.findAll({})
            res.json(AllRefereniels)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const OneRefereniel = db.Refereniel.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(OneRefereniel)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const newRefereniel = await db.Refereniel.create(req.body)
            res.json(newRefereniel)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const updatedRefereniel = await db.Refereniel.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(updatedRefereniel)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const deletedRefereniel = await db.Refereniel.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(deletedRefereniel)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}