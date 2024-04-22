const ordreJourRouter = require("express").Router()
const {getAll,getOne,remove,update,create} = require("../controller/OrderJourController")

ordreJourRouter.get("/getAll",getAll)

ordreJourRouter.get("/getOne/:id",getOne)

ordreJourRouter.delete("/remove/:id",remove)

ordreJourRouter.put("/update/:id",update)

ordreJourRouter.post("/create",create)



module.exports = ordreJourRouter