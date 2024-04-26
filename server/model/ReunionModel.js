module.exports = (connection,DataTypes)=>{
    const Reunion = connection.define('Reunion',{
        name:DataTypes.STRING,
        date:DataTypes.DATE,
        type : {
            type : DataTypes.ENUM ,
            values : ['AGO','AGE','CA']
        },
        done : {
            type : DataTypes.BOOLEAN ,
            defaultValue : false
        }
        
    })
    return Reunion;
}