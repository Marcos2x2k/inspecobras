const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('intimacion',{
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
        Inspectorint:{
            type: DataTypes.STRING,
            allownull: true
        },
        fotoint:{
            type: DataTypes.STRING,
            allownull: true
        },
    })
}