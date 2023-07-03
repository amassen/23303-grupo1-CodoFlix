export const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  subject: '',
  comments: ''
}

export const ERROR_REQUIRED = {
  firstName: "El campo 'Nombre' es requerido.",
  lastName: "El campo 'Apellido' es requerido.",
  emall: "El campo 'Correo' es requerido.",
  telephone: "El campo 'Teléfono' es requerido.",
  comments: "El campo 'Mensajes' es requerido.",
  subject: "El campo 'Asunto a tratar' es requerido."
}

export const ERROR_MSG = {
  firstName: "El campo 'Nombre' sólo acepta letras y espacios en blanco.",
  lastName: "El campo 'Apellido' sólo acepta letras y espacios en blanco.",
  email: "El campo 'Correo' es incorrecto, debe contener: '@' y '.'",
  telephone: "El campo 'Teléfono' sólo acepta entre 10 a 13 números.",
  comments: "El campo 'Mensajes' no debe exceder los 255 caracteres."
}