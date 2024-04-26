const ordreJourRouter = require("express").Router()
const {getAll,getOne,remove,update,create, getAllByReunion} = require("../controller/OrderJourController")

ordreJourRouter.get("/getAll",getAll)

ordreJourRouter.get("/getOne/:id",getOne)

ordreJourRouter.delete("/remove/:id",remove)

ordreJourRouter.put("/update/:id",update)

ordreJourRouter.post("/create",create)

ordreJourRouter.get("/getAllByReunion/:id",getAllByReunion)



module.exports = ordreJourRouter