module.exports = (connection,DataTypes)=>{
    const Filiale = connection.define('Filiale',{
        denomination:DataTypes.STRING,
        type:DataTypes.STRING,
        abreviation:DataTypes.STRING,
        adresse:DataTypes.STRING,
        directeurGeneral:DataTypes.STRING,
        valeurNominale:DataTypes.INTEGER,
        nombredeSiege:DataTypes.INTEGER,
        identifiantUnique:DataTypes.STRING,
        activitePrincipale:DataTypes.STRING,
        activiteAnnexe:DataTypes.STRING,
        visavis:DataTypes.STRING,
    })
    return Filiale;
}