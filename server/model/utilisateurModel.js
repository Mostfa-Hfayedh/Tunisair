module.exports = (connection,DataTypes)=>{
    const Utilisateur = connection.define('Utilisateur',{
        name:DataTypes.STRING,
        matricule:{
            type : DataTypes.STRING,
            unique : true,
            allowNull : false,
        },
        sexe:{
            type : DataTypes.ENUM ,
            values : ['homme' ,'femme']
        },
        phone:DataTypes.STRING,
        email:{
            type : DataTypes.STRING,
            unique : true,
            allowNull : false,
            validate : {
                isEmail : true,
            }
        },
        password:DataTypes.STRING,
        photo:{
            type : DataTypes.STRING,
            defaultValue : 'https://imebehavioralhealth.com/wp-content/uploads/2021/10/user-icon-placeholder-1.png'
        },
        cin:DataTypes.STRING,


    })
    return Utilisateur
}