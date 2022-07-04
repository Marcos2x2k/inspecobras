const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('expediente', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    numexpediente:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    fechainicioentrada:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iniciadornomyape:{
      type: DataTypes.STRING,
      allowNull: false
    },
    domicilio:{
      type: DataTypes.STRING,
      allowNull: true
    },
    adrema:{
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
    zona:{ 
      type: DataTypes.STRING,
      allowNull: true
    },
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
    },
  });
};
