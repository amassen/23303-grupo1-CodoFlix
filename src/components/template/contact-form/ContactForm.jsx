import { Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useForm } from '../../../hooks/useForm'
import { LabelInput } from '../../atom/LabelInput'
import Loader from '../../atom/Loader'
import Message from '../../atom/Message'
import { initialForm, ERROR_REQUIRED, ERROR_MSG } from './utils'

const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexPhone = /^([0-9]{10,13})$/
  let regexComments = /^.{1,255}$/

  if (!form.firstName) {
    errors.firstName = ERROR_REQUIRED.firstName
  } else if (!regexName.test(form.firstName.trim())) {
    errors.firstName = ERROR_MSG.firstName
  }

  if (!form.lastName) {
    errors.lastName = ERROR_REQUIRED.lastName
  } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName = ERROR_MSG.lastName
  }

  if (!form.email) {
    errors.email = ERROR_REQUIRED.emall
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = ERROR_MSG.email
  }

  if (!form.telephone) {
    errors.telephone = ERROR_REQUIRED.telephone
  } else if (!regexPhone.test(form.telephone.trim())) {
    errors.telephone = ERROR_MSG.telephone 
  }

  if (!form.subject.trim()) {
    errors.subject = ERROR_REQUIRED.subject
  }

  if (!form.comments.trim()) {
    errors.comments = ERROR_REQUIRED.comments
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = ERROR_MSG.comments 
  }

  return errors
}

let styles = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#dc3545',
  padding: '12px 0px'
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
