module.exports = (connection,DataTypes)=>{
    const Fonction = connection.define('Fonction',{
        Fonction:DataTypes.STRING,
        Abreviation:DataTypes.STRING,
        Qualite:DataTypes.BOOLEAN,
    })
    return Fonction;
}