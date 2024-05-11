const RecommandationRoute = require("express").Router()
const{getAll,getOne,remove,update,create, getByReunion} = require("../controller/RecommandationController")


RecommandationRoute.get("/getAll",getAll)

RecommandationRoute.get("/getOne/:id",getOne)

RecommandationRoute.delete("/remove/:id",remove)

RecommandationRoute.put("/update/:id",update)

RecommandationRoute.post("/create",create)

RecommandationRoute.get("/getByReunion/:id",getByReunion)



module.exports = RecommandationRoute