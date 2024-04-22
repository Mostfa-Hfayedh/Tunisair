const voteRoute = require("express").Router()
const {getAll,getOne,remove,update,create} = require("../controller/VoteController")

voteRoute.get("/getAll",getAll)

voteRoute.get("/getOne/:id",getOne)

voteRoute.delete("/remove/:id",remove)

voteRoute.put("/update/:id",update)

voteRoute.post("/create",create)



module.exports = voteRoute