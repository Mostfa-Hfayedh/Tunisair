const ReferenielRouter = require("express").Router()
const {getAll,getOne,remove,update,create} = require("../controller/ReferenielController")

ReferenielRouter.get("/getAll",getAll)

ReferenielRouter.get("/getOne/:id",getOne)

ReferenielRouter.delete("/remove/:id",remove)

ReferenielRouter.put("/update/:id",update)

ReferenielRouter.post("/create",create)



module.exports = ReferenielRouter