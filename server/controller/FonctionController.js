const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllFonctions = await db.Fonction.findAll({})
            res.json(AllFonctions)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const OneFonction = await db.Fonction.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(OneFonction)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const newFonction = await db.Fonction.create({
                libelle:req.body.libelle
            })
            res.json(newFonction)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const updatedFonction = await db.Fonction.update({
                libelle:req.body.libelle
            },{
                where:{
                    id:req.params.id
                }
            })
            res.json(updatedFonction)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove : async (req,res) =>{
        try {
            const deletedFonction = await db.Fonction.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(deletedFonction)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}