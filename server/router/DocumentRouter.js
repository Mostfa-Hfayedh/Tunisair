const DocumentRoute = require("express").Router()
const{getAll,getOne,remove,update,create,getAllByReunion} = require("../controller/DocumentController")


DocumentRoute.get("/getAll",getAll)

DocumentRoute.get("/getOne/:id",getOne)

DocumentRoute.delete("/remove/:id",remove)

DocumentRoute.put("/update/:id",update)

DocumentRoute.post("/create",create)

DocumentRoute.get("/getAllByReunion/:id",getAllByReunion)



module.exports = DocumentRoute