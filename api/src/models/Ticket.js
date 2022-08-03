const {DataTypes} = require('sequelize')
// otra forma -> import { DataTypes } from 'sequelize';

module.exports = (sequelize) => {
    sequelize.define('ticket', {
        id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
        },
        numticket:{
            type: DataTypes.STRING,
            allowNull: true
        },
        iniciador:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        ubicacion:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        adrema:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        directordeobra:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        destinodelaobra:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        zona:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        observaciones:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        permisodeobranum :{
            type: DataTypes.STRING,
            allowNull: true,
          },
        actasdeinfraccionnum:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        fechaentradaainspecciones:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        inspector:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        fechainspecccion:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        intimacion:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        infracciones:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          observacioneslugar:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        pasea:{
            type: DataTypes.STRING,
            allowNull: true,
          },
        fecha:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          userid:{
            type: DataTypes.STRING,
            allowNull: true
          }
    })
}