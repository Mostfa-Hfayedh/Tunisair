module.exports = (connection,DataTypes)=>{
    const Comptes = connection.define('Comptes',{
        role:{
            type : DataTypes.ENUM,
            values : ["Actionnaire","Gestionnaire","Décideur","Administrateur", "Sécrétaire"]
        }
    })
    return Comptes;
}