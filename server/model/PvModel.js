module.exports = (connection,DataTypes)=>{
    const Pv = connection.define('Pv',{
        Description:DataTypes.TEXT,
        valid : {
            type : DataTypes.BOOLEAN,
            defaultValue : false,
        }
    })
    return Pv;
}