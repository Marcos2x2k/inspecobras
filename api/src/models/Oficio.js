const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('oficios', {
        numoficio:{
            type: DataTypes.STRING,
            allowNull: false,
          },  
        numexpediente:{
            type: DataTypes.STRING,
            allowNull: false
          },   
        causa:{
            type: DataTypes.STRING,
            allowNull:false
          },      
        responsable:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        contestado:{
            type: DataTypes.STRING,
            allowNull: false
        },
        fechacontestadooficio:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ubicacion:{
            type: DataTypes.STRING,
            allowNull:false  
        },
        observaciones:{
            type: DataTypes.STRING,
            allowNull: true,
          },    
        userid:{
            type: DataTypes.STRING,
            allowNull: true
          }
    });
};