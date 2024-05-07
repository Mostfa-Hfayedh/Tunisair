const express = require("express")
const app = express()
const PORT = 3010
const cors = require("cors")
const FilialeRoute = require("./router/FilialeRouter")
const PvRoute = require("./router/PvRouter")
const ReunionRoute = require("./router/ReunionRouter")
const utilisateurRoute = require("./router/utilisateurRouter")
const comptesRouter = require("./router/ComptesRouter")
const voteRoute = require("./router/VoteRouter")
const fonctionRoute = require("./router/FonctionRoute")
const ReferenielRoute = require("./router/ReferenielRoute")
const ordreJourRoute = require("./router/OrdreJourRoute")
const DocumentRoute = require("./router/DocumentRouter")
const InvitationRoute = require("./router/InvitationRouter")
const RecommandationRoute = require("./router/RecommandationRouter")
const presenceRouter = require("./router/Presence.router")









require("./database")
app.use(express.static(__dirname+'/..client/dist'))
app.use(cors())
app.use(express.json())

app.use("/api/Filiale", FilialeRoute)
app.use("/api/Pv", PvRoute)
app.use("/api/reunion", ReunionRoute)
app.use("/api/utilisateur", utilisateurRoute)
app.use("/api/comptes", comptesRouter)
app.use("/api/vote", voteRoute)
app.use("/api/fonction", fonctionRoute)
app.use("/api/refereniel", ReferenielRoute)
app.use("/api/ordreJour", ordreJourRoute)
app.use("/api/document", DocumentRoute)
app.use("/api/invitation", InvitationRoute)
app.use("/api/recommandation", RecommandationRoute)
app.use("/api/presence",presenceRouter)










app.listen(PORT,()=>{
    console.log("listening on PORT :",PORT);
})