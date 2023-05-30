
import { Form} from 'react-bootstrap';

export default function FormGroup({type,texto,placeholder,controlId}) {

  return (
        <Form.Group className="mb-3" controlId={controlId}>
          <Form.Label>{texto}</Form.Label>
          <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
  )
}
