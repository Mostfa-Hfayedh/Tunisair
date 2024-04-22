module.exports = (connection,DataTypes)=>{
    const Refereniel = connection.define('Refereniel',{
        Titre:DataTypes.STRING,
        Version:DataTypes.STRING,
        Date:DataTypes.DATE,
        Document:DataTypes.STRING,

    })
    return Refereniel;
}