const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const document = await db.Document.findAll({})
            res.json(document)
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const document = await db.Document.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(document)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const document = await db.Document.create(req.body)
            res.json(document)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const document = await db.Document.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(document)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const document = await db.Document.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(document)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getAllByReunion : async (req, res) => {
        try {
            const AllDocuments = await db.Document.findAll({
                where:{
                    ReunionId:req.params.id
                }
            })
            res.json(AllDocuments)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
}
