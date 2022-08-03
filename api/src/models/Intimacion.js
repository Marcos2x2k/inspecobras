const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('intimacion',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },        
        boletaintnum:{
            type: DataTypes.STRING,
            allownull: true,
        },
        adremaint:{
            type: DataTypes.STRING,
            allownull: true,
        },
        numexpedienteint:{
            type: DataTypes.STRING,
            allownull: true
        },
        señorseñora:{
            type: DataTypes.STRING,
            allownull: true
        },
        domiciliopart:{
            type: DataTypes.STRING,
            allownull: true
        },
        lugaractuacion:{
            type: DataTypes.STRING,
            allownull: true
        },
        otorgaplazode:{
            type: DataTypes.STRING,
            allownull: true
        },
        paracumplimientoa:{
            type: DataTypes.STRING,
            allownull: true
        },
        fechaintimacion:{
            type: DataTypes.STRING,
            allownull: true
        },
        horaintimacion:{
            type: DataTypes.STRING,
            allownull: true
        },
        vencimientoint:{
            type: DataTypes.STRING,
            allownull: true
        },
        notificadoint:{
            type: DataTypes.STRING,
            allownull: true
        },
        aclaracion:{
            type: DataTypes.STRING,
            allownull: true
        },
        numcodigoint:{
            type: DataTypes.STRING,
            allownull: true
        },
        inspectorint:{
            type: DataTypes.STRING,
            allownull: true
        },
        fotoint:{
            type: DataTypes.STRING,
            allownull: true,
            defaultValue: "https://muchosnegociosrentables.com/wp-content/uploads/2020/11/negocios-exitosos-de-construccion-8-ideas.jpg"
        },
        userid:{
            type: DataTypes.STRING,
            allowNull: true
          }
    })
}