module.exports = (connection,DataTypes)=>{
    const Vote = connection.define('Vote',{
        vote:DataTypes.BOOLEAN,
    })
    return Vote;
}