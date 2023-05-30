import { Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useForm } from '../../../hooks/useForm'
import { LabelInput } from '../../atom/LabelInput'
import Loader from '../../atom/Loader'
import Message from '../../atom/Message'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  subject: '',
  comments: ''
}

const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexPhone = /^([0-9]{10,13})$/
  let regexComments = /^.{1,255}$/

  if (!form.firstName) {
    errors.firstName = "El campo 'Nombre' es requerido."
  } else if (!regexName.test(form.firstName.trim())) {
    errors.firstName =
      "El campo 'Nombre' sólo acepta letras y espacios en blanco."
  }

  if (!form.lastName) {
    errors.lastName = "El campo 'Apellido' es requerido."
  } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName =
      "El campo 'Apellido' sólo acepta letras y espacios en blanco."
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Correo' es requerido."
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Correo' es incorrecto, debe contener: '@' y '.'"
  }

  if (!form.telephone) {
    errors.telephone = "El campo 'Teléfono' es requerido."
  } else if (!regexPhone.test(form.telephone.trim())) {
    errors.telephone = "El campo 'Teléfono' sólo acepta entre 10 a 13 números."
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido."
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Mensajes' es requerido."
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo 'Mensajes' no debe exceder los 255 caracteres."
  }

  return errors
}

let styles = {
  fontWeight: 'bold',
  color: '#dc3545'
}

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm)

  return (
    <section className="container">
      <h2 className="text-center py-5">Contacto</h2>
      <Form onSubmit={handleSubmit} className="container">
        <div className="row">
        <div className="col-sm-12 col-md-6 mb-3">
          <LabelInput
            id="firstName"
            labelText="Nombre:"
            placeholderText="Escribe tu nombre"
            handleBlur={handleBlur}
            handleChange={handleChange}
            formItem={form.firstName}
            errorsItem={errors.firstName}
          />
          <LabelInput
            id="lastName"
            labelText="Apellido:"
            placeholderText="Escribe tu apellido"
            handleBlur={handleBlur}
            handleChange={handleChange}
            formItem={form.lastName}
            errorsItem={errors.lastName}
          />
          <LabelInput
            id="email"
            inputType="email"
            labelText="Correo:"
            placeholderText="Escribe tu correo electrónico"
            handleBlur={handleBlur}
            handleChange={handleChange}
            formItem={form.email}
            errorsItem={errors.email}
          />
          <LabelInput
            id="telephone"
            labelText="Teléfono:"
            placeholderText="Escribe tu teléfono"
            handleBlur={handleBlur}
            handleChange={handleChange}
            formItem={form.telephone}
            errorsItem={errors.telephone}
          />
        </div>
        <div className="col-sm-12 col-md-6 mb-3">
          <LabelInput
            id="subject"
            labelText="Asunto:"
            placeholderText="Indica el asunto"
            handleBlur={handleBlur}
            handleChange={handleChange}
            formItem={form.subject}
            errorsItem={errors.subject}
          />
          <textarea
            className="form-control"
            name="comments"
            style={{ height: '200px' }}
            placeholder="Dejanos tu mensaje"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
          {errors.comments && <p style={styles}>{errors.comments}</p>}
        </div>
        </div>
        <Row as="div" className="d-grid gap-2 col-6 mx-auto py-3">
          <Form.Control
            className="btn btn-success"
            type="submit"
            value="Enviar"
          />
        </Row>
      </Form>
      {loading && <Loader />}
      {response && <Message msg="Los datos han sido enviados" />}
    </section>
  )
}

export default ContactForm
