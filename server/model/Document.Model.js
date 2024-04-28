module.exports = (connection,DataTypes)=>{
    const Document = connection.define('Document',{
        titre:DataTypes.STRING,
        url:DataTypes.STRING,
       
    })
    return Document;
}