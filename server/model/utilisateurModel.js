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
        photo:{
            type : DataTypes.STRING,
            defaultValue : 'https://imebehavioralhealth.com/wp-content/uploads/2021/10/user-icon-placeholder-1.png'
        },
        cin:DataTypes.STRING,


    })
    return Utilisateur
}