import { Form } from 'react-bootstrap'
export default function FormGroup({
  type,
  texto,
  placeholder,
  controlId,
  valor,
  onCambio,
  esInvalido,
  feedbackType,
  typeError
}) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{texto}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={valor}
        onChange={onCambio}
        isInvalid={esInvalido}
      />
      <Form.Control.Feedback type={feedbackType}>
        {typeError}
      </Form.Control.Feedback>
    </Form.Group>
  )
}
