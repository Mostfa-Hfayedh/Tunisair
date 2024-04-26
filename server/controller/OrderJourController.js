const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllOrderJours = db.OrderJour.findAll({})
            res.json(AllOrderJours)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const OrderJour = await db.OrderJour.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(OrderJour)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const OrderJour = await db.OrderJour.create(req.body)
            res.json(OrderJour)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const OrderJour = await db.OrderJour.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(OrderJour)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove: async (req,res) => {
        try {
            const OrderJour = await db.OrderJour.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(OrderJour)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getAllByReunion : async (req, res) => {
        try {
            const AllOrderJours = await db.OrderJour.findAll({
                where:{
                    ReunionId:req.params.id
                }
            })
            res.json(AllOrderJours)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
}