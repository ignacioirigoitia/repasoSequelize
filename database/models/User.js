module.exports = (sequelize, dataTypes) => {

    const alias = "Usuarios"; // defino el alias del modelo

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),                                          // defino las propiedades de los datos de la tabla
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        pass : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        avatar : {
            type : dataTypes.STRING(45)
        },
        direccionId : {
            type : dataTypes.INTEGER
        }
    };

    const config = {
        tableName : "users", // el nombre de la tabla
        timestamps : false,  // marcas de tiempo, createup updateup
    };

    const User = sequelize.define(alias, cols, config); // utilizo el metodo define de sequelize para definir las 3 constantes creadas

    User.associate = (models) => {
        User.belongsTo(models.Direccion,{
            as : "direccion",                      // hago la asociacion con la tabla de direcciones
            foreignKey : "direccionId"
        })
    };

    return User;
};