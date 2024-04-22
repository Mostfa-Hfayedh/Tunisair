const FilialeRoute = require("express").Router()
const{getAll,getOne,remove,update,create} = require("../controller/FilialeController")


FilialeRoute.get("/getAll",getAll)

FilialeRoute.get("/getOne/:id",getOne)

FilialeRoute.delete("/remove/:id",remove)

FilialeRoute.put("/update/:id",update)

FilialeRoute.post("/create",create)



module.exports = FilialeRoute