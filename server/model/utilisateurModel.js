module.exports = (connection,DataTypes)=>{
    const Utilisateur = connection.define('Utilisateur',{
        name:DataTypes.STRING,
        matricule:DataTypes.STRING,
        sexe:{
            type : DataTypes.ENUM ,
            values : ['homme' ,'femme']
        },
        phone:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        personnelTunisair:DataTypes.BOOLEAN,
        representantLegal:DataTypes.BOOLEAN,
        photo:DataTypes.STRING,
        cin:DataTypes.STRING,


    })
    return Utilisateur
}