const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('expediente', {
    id:{
      type: DataTypes.INTEGER,      
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    // expediente:{
    //   type:DataTypes.STRING,
    //   allowNull: false
    // },
    // letra:{
    //   type:DataTypes.STRING,
    //   allowNull: false
    // },
    // anio:{
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    estado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numexpediente:{
      type: DataTypes.STRING,
      allowNull: true      
    },    
    iniciadornomyape:{
      type: DataTypes.STRING,
      allowNull: true
    },
    domicilio:{
      type: DataTypes.STRING,
      allowNull: true
    },
    adrema:{
      type: DataTypes.STRING,
      allowNull: true
    },   
    fiduciariopropsocio:{
      type: DataTypes.STRING,
      allowNull: true
    },
    direcfiduciariopropsocio:{
      type: DataTypes.STRING,
      allowNull: true
    },correofiduciariopropsocio:{
      type: DataTypes.STRING,
      allowNull: true
    },
    directorobraoperitovisor:{
      type: DataTypes.STRING,
      allowNull: true
    },
    destinodeobra:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    // zona:{ 
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    superficieterreno:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0"
    },
    superficieaconstruir:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0"
    },
    superficiesubsueloplantabaja:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0"
    },
    superficieprimerpisoymaspisos:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0"
    },
    observaciones:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No Posee"
    },
    permisobraoactainfrac:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No Posee"
    },
    fotoexpediente:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "https://colonbuenosaires.com.ar/elfaro/wp-content/uploads/2017/09/expe.jpg"
    },
    fechainicioentrada:{
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
    userid:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"123"
    }
  });
};
