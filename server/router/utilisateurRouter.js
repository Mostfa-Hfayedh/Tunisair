const utilisateurRoute = require("express").Router()
const{getAll, login, register, getOne, remove, update, getOneById} = require("../controller/utilisateurController")
const authProtection = require("../middleware/auth")


utilisateurRoute.get("/getAll",getAll)
utilisateurRoute.post("/login",login)
utilisateurRoute.post("/register",register)
utilisateurRoute.get("/getOne",authProtection,getOne)
utilisateurRoute.delete("/delete/:id",remove)
utilisateurRoute.put("/update/:id",update)
utilisateurRoute.get("/getOne/:id",getOneById)

module.exports = utilisateurRoute