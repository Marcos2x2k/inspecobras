const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('inspeccion', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },    
          informeinspnum:{
            type: DataTypes.INTEGER,
            allowNull: true
          },
        numexpediente:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        fechaentradinspec:{
            type: DataTypes.STRING,
            allowNull: true
        },
        inspecfecha:{
            type: DataTypes.STRING,
            allowNull:true  
        },
        inspector:{
            type: DataTypes.STRING,
            allowNull:true  
        },
        fotoinspeccion:{    // pidio doc en macro para excel y coloco aca tambien
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://muchosnegociosrentables.com/wp-content/uploads/2020/11/negocios-exitosos-de-construccion-8-ideas.jpg"
        },
        intimacion:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        infraccion:{
            type: DataTypes.STRING,
            allowNull: true
        },
        observacion:{
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
        },
        userid:{
            type: DataTypes.STRING,
            allowNull: true
          }
    });
};