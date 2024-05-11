const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const recommandation = await db.Recommandation.findAll({})
            res.json(recommandation)
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const recommandation = await db.Recommandation.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(recommandation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const recommandation = await db.Recommandation.create(req.body)
            res.json(recommandation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const recommandation = await db.Recommandation.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(recommandation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const recommandation = await db.Recommandation.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(recommandation)
            
            
        } catch (error) {
            console.log(error)
            
        }
    } ,
    getByReunion : async (req,res) => {
        try {
            const recommandation = await db.Recommandation.findAll({
                where:{
                    ReunionId:req.params.id
                }
            })
            res.json(recommandation)
        } catch (error) {
            console.log(error)
        }
    }
}