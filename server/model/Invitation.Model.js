module.exports = (connection,DataTypes)=>{
    const Invitation = connection.define('Invitation',{
       presence : {
        type:DataTypes.BOOLEAN,
        defaultValue:false
       }
    })
    return Invitation;
}