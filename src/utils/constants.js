export const YEAR = new Date().getFullYear()

// Expresiones regulares para validaciones
export const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
export const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
// entre 10 a 13 numeros
export const regexPhone = /^([0-9]{10,13})$/ 
// entre 1 a 255 caracteres
export const regexComments = /^.{1,255}$/ 
// Minimo de 8 caracteres y maximos de 10, al menos una mayuscula, al menos una minuscula, un numero y un caracter especial
export const regexPass =
/^(?=.*[a-zñáéíóú])(?=.*[A-ZÑÁÉÍÓÚ])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/