const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('infraccion', {
        numacta:{
            type: DataTypes.STRING,
            allowNull: false,
          },
        fechainfraccion:{
            type: DataTypes.STRING,
            allowNull: false
        },        
        infractor:{
            type: DataTypes.STRING,
            allowNull:false  
        },
        fotoinfraccion:{    // pidio doc en macro para excel y coloco aca tambien
            type: DataTypes.STRING,
            allowNull: true
        },
        domicilio:{
            type: DataTypes.STRING,
            allowNull: true,
        },        
    });
};