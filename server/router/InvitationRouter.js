const InvitationRoute = require("express").Router()
const{getAll,getOne,remove,update,create, getByCompte, getByReunion, deleteByReunion} = require("../controller/InvitationController")


InvitationRoute.get("/getAll",getAll)

InvitationRoute.get("/getOne/:id",getOne)

InvitationRoute.delete("/remove/:id",remove)

InvitationRoute.put("/update/:id",update)

InvitationRoute.post("/create",create)

InvitationRoute.get("/getByCompte/:id",getByCompte)

InvitationRoute.get("/getByReunion/:id",getByReunion)

InvitationRoute.delete("/deleteByReunion/:id", deleteByReunion)


module.exports = InvitationRoute