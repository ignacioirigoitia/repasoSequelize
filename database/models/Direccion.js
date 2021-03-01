module.exports = (sequelize, dataTypes) => {

    const alias = "Direccion";  // defino el alias del modelo

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        street : {
            type : dataTypes.STRING(45)                                       // defino las propiedades de los datos de la tabla
        },
        address : {
            type : dataTypes.INTEGER
        },
        city : {
            type : dataTypes.STRING(45)
        },
        state : {
            type : dataTypes.STRING(45)
        }
    };

    const config = {
        tableName : "direccions",   // el nombre de la table
        timestamps : false  // marcas de tiempo, createup updateup
    };

    const Direccion = sequelize.define(alias, cols, config);  // utilizo el metodo define de sequelize para definir las 3 constantes creadas

    return Direccion;
};