const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('infraccion', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },    
          actainfnum:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          fechainfraccion:{
            type: DataTypes.STRING,
            allowNull: false
        },        
        horainfraccion:{
            type: DataTypes.STRING,
            allowNull:false  
        },
        numexpedienteinf:{    // pidio doc en macro para excel y coloco aca tambien
            type: DataTypes.STRING,
            allowNull: true
        },
        adremainf:{
            type: DataTypes.STRING,
            allowNull: true,
        },      
        apellidonombrepropietarioinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        dnipropietarioinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        cuilpropietarioinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        lugardeconstitucioninf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        Causasinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        Ordenanzanum:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        articuloinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        incisonum:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        observacion:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        apellidonombretestigoinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        Inspectorinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        Inspectorcod:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        detallegeneral:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        informeinpecnum:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        inforinspecobsevaciones:{
            type: DataTypes.STRING,
            allowNull: true,
        },     
        fotoinf:{
            type: DataTypes.STRING,
            allowNull: true,
        },       
        userid:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};