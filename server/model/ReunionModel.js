module.exports = (connection,DataTypes)=>{
    const Reunion = connection.define('Reunion',{
        Name:DataTypes.STRING,
        Data:DataTypes.DATE,
        Heure:DataTypes.TIME,
        type : {
            type : DataTypes.ENUM ,
            values : ['AGO','AGE','STAFF']
        }
    })
    return Reunion;
}