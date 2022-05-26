const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('inspeccion', {
        numexpediente:{
            type: DataTypes.STRING,
            allowNull: false,
          },
        fechaentradinspec:{
            type: DataTypes.STRING,
            allowNull: false
        },
        inspecfecha:{
            type: DataTypes.STRING,
            allowNull:false  
        },
        inspector:{
            type: DataTypes.STRING,
            allowNull:false  
        },
        fotoinspeccion:{    // pidio doc en macro para excel y coloco aca tambien
            type: DataTypes.STRING,
            allowNull: true
        },
        intimacion:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        infracciones:{
            type: DataTypes.STRING,
            allowNull: true
        },
        observaciones:{
            type: DataTypes.STRING,
            allowNull: true
        },
        paseanumdestino:{
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha:{
            type: DataTypes.STRING,
            allowNull: true
        },
        pasea:{
            type: DataTypes.STRING,
            allowNull: true
        },
        fechapasea:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};