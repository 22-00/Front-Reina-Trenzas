export const Validation = (obj) => {
    let regexCel = /^[^a-zA-Z@.!$%^&*=`~]*$/;
    const error = {};
    if(!regexCel.test(obj.phone)) error.phone = "numero de telefono invalido"
    if(obj.message.length > 300) error.message = "El mensaje no puede contener mas de 300 caracteres"
    return error
}