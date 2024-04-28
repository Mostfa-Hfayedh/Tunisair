const {Sequelize,DataTypes} = require("sequelize")

const connection = new Sequelize (
    "tunisair",
    "root",
    "root",
    {
        host:'localhost',
        dialect :'mysql'
    }
)

connection.authenticate()
.then(()=>{
    console.log("db connected"); 
})
.catch((err)=>{
    console.log(err);
})

const Utilisateur = require("./model/utilisateurModel")(connection,DataTypes)
const Reunion = require("./model/ReunionModel")(connection,DataTypes)
const Refereniel = require("./model/ReferenielModel")(connection,DataTypes)
const Pv = require("./model/PvModel")(connection,DataTypes)
const OrderJour = require("./model/OrderJourModel")(connection,DataTypes)
const Fonction = require("./model/FonctionModel")(connection,DataTypes)
const Filiale = require("./model/FilialeModel")(connection,DataTypes)
const Comptes = require("./model/Comptes.model")(connection,DataTypes)
const Vote = require("./model/VoteModel")(connection,DataTypes)
const Document = require("./model/Document.Model")(connection,DataTypes)
const Invitation = require("./model/Invitation.Model")(connection,DataTypes)
const Recommandation = require("./model/Recommandation.Model")(connection,DataTypes)
const Presence = require("./model/Presence.model")(connection,DataTypes)


const db = {}

db.Utilisateur = Utilisateur
db.Reunion = Reunion
db.Refereniel = Refereniel
db.Pv = Pv
db.OrderJour = OrderJour
db.Fonction = Fonction
db.Filiale = Filiale
db.Comptes = Comptes
db.Vote = Vote
db.Document = Document
db.Invitation = Invitation
db.Recommandation =Recommandation
db.Presence = Presence

Filiale.hasMany(Comptes)
Comptes.belongsTo(Filiale)

Utilisateur.hasMany(Comptes)
Comptes.belongsTo(Utilisateur)

OrderJour.hasMany(Comptes)
Comptes.belongsTo(OrderJour)

Vote.hasMany(Comptes)
Comptes.belongsTo(Vote)

OrderJour.belongsTo(Reunion)
Reunion.belongsTo(OrderJour)

Reunion.belongsTo(Pv)
Pv.belongsTo(Reunion)

Filiale.hasMany(Reunion)
Reunion.belongsTo(Filiale)

Vote.belongsTo(OrderJour)
OrderJour.belongsTo(Vote)

Reunion.hasMany(Document)
Document.belongsTo(Reunion)

Reunion.hasMany(Invitation)
Invitation.belongsTo(Reunion)

Comptes.hasMany(Invitation)
Invitation.belongsTo(Comptes)

Reunion.hasMany(Recommandation)
Recommandation.belongsTo(Reunion)

Reunion.hasMany(Presence)
Presence.belongsTo(Reunion)

Comptes.hasMany(Presence)
Presence.belongsTo(Comptes)

Utilisateur.hasMany(Presence)
Presence.belongsTo(Utilisateur)




connection.sync({alter:true}).then(()=>{
    console.log("table created successfully")
}).catch((error)=>{
    console.log(error)
})


module.exports= db


