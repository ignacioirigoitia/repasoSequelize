const {check, body} = require("express-validator");

module.exports = [
    check("nombre")
    .notEmpty()
    .withMessage("El nombre es requerido"),

    check("email")
    .isEmail()
    .withMessage("Ingresa un email valido"),

    check("pass")
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage("La contraseña debe tener entre 6 y 12 caracteres"),

    body("pass2").custom((value, {req}) => value !== req.body.pass ? false : true)  // hago un if ternario para verificar que la contraseña sea igual a la ingresada
    .withMessage("Las contraseñas no coinciden"),

    check("bases")
    .isString("on")
    .withMessage("Debes aceptar las bases y condiciones")
];