module.exports = (connection,DataTypes)=>{
    const Pv = connection.define('Pv',{
        Description:DataTypes.STRING,
        valid : {
            type : DataTypes.BOOLEAN,
            defaultValue : false,
        }
    })
    return Pv;
}