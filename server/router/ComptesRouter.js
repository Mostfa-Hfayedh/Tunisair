const comptesRouter = require("express").Router()
const {getAll,getOne,update,remove,create, getAllCompteByUser, getAllCompteByFiliale, getUsersById, getComptesByUserAndFiliale, deleteCompteByUser, deleteCompteByFiliale} = require("../controller/CompteController")

comptesRouter.get("/getAll",getAll)
comptesRouter.post("/create",create)
comptesRouter.get("/getOne/:id",getOne)
comptesRouter.put("/update/:id",update)
comptesRouter.delete("/remove/:id",remove) 
comptesRouter.get("/getAllCompteByUser/:id",getAllCompteByUser) 
comptesRouter.get("/getAllCompteByFiliale/:id",getAllCompteByFiliale) 
comptesRouter.post("/getUsersById",getUsersById)
comptesRouter.post("/getComptesByUserAndFiliale",getComptesByUserAndFiliale)
comptesRouter.delete("/deleteCompteByUser/:id",deleteCompteByUser)
comptesRouter.delete("/deleteCompteByFiliale/:id",deleteCompteByFiliale)




module.exports = comptesRouter