const comptesRouter = require("express").Router()
const {getAll,getOne,update,remove,create, getAllCompteByUser, getAllCompteByFiliale, getUsersById} = require("../controller/CompteController")

comptesRouter.get("/getAll",getAll)
comptesRouter.post("/create",create)
comptesRouter.get("/getOne/:id",getOne)
comptesRouter.put("/update/:id",update)
comptesRouter.delete("/remove/:id",remove) 
comptesRouter.get("/getAllCompteByUser/:id",getAllCompteByUser) 
comptesRouter.get("/getAllCompteByFiliale/:id",getAllCompteByFiliale) 
comptesRouter.post("/getUsersById",getUsersById)




module.exports = comptesRouter