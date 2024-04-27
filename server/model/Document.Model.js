module.exports = (connection,DataTypes)=>{
    const Document = connection.define('Document',{
        url:DataTypes.STRING,
       
    })
    return Document;
}