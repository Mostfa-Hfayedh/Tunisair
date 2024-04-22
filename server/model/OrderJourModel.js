module.exports = (connection,DataTypes)=>{
    const OrderJour = connection.define('OrderJour',{
        TypeDaction:DataTypes.STRING,
        Nature:DataTypes.STRING,
        Num:DataTypes.STRING,
        Description:DataTypes.STRING,

    })
    return OrderJour;
}