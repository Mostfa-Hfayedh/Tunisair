module.exports = (connection,DataTypes)=>{
    const Pv = connection.define('Pv',{
        Name:DataTypes.STRING,
        Description:DataTypes.STRING,
    })
    return Pv;
}