const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllPvs = await db.Pv.findAll({})
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
            const newPv = await db.Pv.create(req.body)
            res.json(newPv)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const updatedPv = await db.Pv.update(req.body,{
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
    },
    getByFiliale : async (req, res)=>{
        try {
            let pv = []
            const reunions = await db.Reunion.findAll({where : {FilialeId:req.params.id}})
            for ( let reunion of reunions) {
                const Allpv = await db.Pv.findAll({
                    where:{
                        ReunionId:reunion.id
                    }
                })
                pv.push(...Allpv)
            }
            res.json(pv)
        } catch (error) {
            console.log(error);
        }
    }
}