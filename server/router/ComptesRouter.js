const comptesRouter = require("express").Router()
const {getAll,getOne,update,remove,create, getAllCompteByUser} = require("../controller/CompteController")

comptesRouter.get("/getAll",getAll)
comptesRouter.post("/create",create)
comptesRouter.get("/getOne/:id",getOne)
comptesRouter.put("/update/:id",update)
comptesRouter.delete("/remove/:id",remove) 
comptesRouter.get("/getAllCompteByUser/:id",getAllCompteByUser) 




module.exports = comptesRouter