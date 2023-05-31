export const YEAR = new Date().getFullYear()

// Expresiones regulares para validaciones
export const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
export const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
export const regexPhone = /^([0-9]{10,13})$/
export const regexComments = /^.{1,255}$/