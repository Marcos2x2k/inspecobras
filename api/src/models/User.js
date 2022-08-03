const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        userid:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user:{
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(60),
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
}