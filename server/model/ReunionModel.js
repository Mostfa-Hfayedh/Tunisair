module.exports = (connection,DataTypes)=>{
    const Reunion = connection.define('Reunion',{
        name:DataTypes.STRING,
        date:DataTypes.DATE,
        type : {
            type : DataTypes.ENUM ,
            values : ['AGO','AGE','CA']
        },
        etat : {
            type : DataTypes.ENUM,
            values : ['Prévue','En Cours','Annulé','Terminé'],
            defaultValue : 'Prévue'
        },
        lieu : DataTypes.STRING
    })
    return Reunion;
}