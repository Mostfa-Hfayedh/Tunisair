const ReunionRoute = require("express").Router()
const{getAll,getOne,remove,update,create, getReunionByFiliale, deleteReunionByFiliale} = require("../controller/ReunionController")


ReunionRoute.get("/getAll",getAll)

ReunionRoute.get("/getOne/:id",getOne)

ReunionRoute.delete("/remove/:id",remove)

ReunionRoute.put("/update/:id",update)

ReunionRoute.post("/create",create)

ReunionRoute.get("/getReunionByFiliale/:id",getReunionByFiliale)

ReunionRoute.delete("/deleteReunionByFiliale/:id",deleteReunionByFiliale)

module.exports = ReunionRoute