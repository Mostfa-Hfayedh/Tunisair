const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllFiliales = db.Filiale.findAll({})
            res.json(AllFiliales)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const filiale = await db.Filiale.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(filiale)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const filiale = await db.Filiale.create(req.body)
            res.json(filiale)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const filiale = await db.Filiale.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(filiale)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const filiale = await db.Filiale.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(filiale)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}