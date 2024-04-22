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

Vote.belongsTo(OrderJour)
OrderJour.belongsTo(Vote)





connection.sync({alter:true}).then(()=>{
    console.log("table created successfully")
}).catch((error)=>{
    console.log(error)
})


module.exports= db


