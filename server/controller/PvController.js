const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllPvs = db.Pv.findAll({})
            res.json(AllPvs)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const OnePv = await db.Pv.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(OnePv)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const newPv = await db.Pv.create({
                nom:req.body.nom,
                description:req.body.description
            })
            res.json(newPv)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const updatedPv = await db.Pv.update({
                nom:req.body.nom,
                description:req.body.description
            },{
                where:{
                    id:req.params.id
                }
            })
            res.json(updatedPv)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const deletedPv = await db.Pv.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(deletedPv)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}