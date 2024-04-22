const fonctionRouter = require("express").Router()
const {getAll,getOne,create,remove,update} = require("../controller/FonctionController")

fonctionRouter.get("/getAll",getAll)

fonctionRouter.get("/getOne/:id",getOne)

fonctionRouter.post("/create",create)

fonctionRouter.delete("/remove/:id",remove)

fonctionRouter.put("/update/:id",update)



module.exports = fonctionRouter