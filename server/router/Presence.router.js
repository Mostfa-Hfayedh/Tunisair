const presenceRouter = require("express").Router()
const {getAll,getOne,remove,update,create, getPresenceByReunion} = require("../controller/Presence.controller")

presenceRouter.get("/getAll",getAll)

presenceRouter.get("/getOne/:id",getOne)

presenceRouter.delete("/remove/:id",remove)

presenceRouter.put("/update/:id",update)

presenceRouter.post("/create",create)

presenceRouter.get("/getPresenceByReunion/:id",getPresenceByReunion)

module.exports = presenceRouter