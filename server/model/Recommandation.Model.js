module.exports = (connection,DataTypes)=>{
    const Recommandation = connection.define('Recommandation',{
        description:DataTypes.STRING,
       
    })
    return Recommandation;
}