import React from 'react'
import Form from 'react-bootstrap/Form'

export const LabelInput = ({
  id,
  labelText,
  placeholderText,
  inputType,
  handleBlur,
  handleChange,
  formItem,
  errorsItem,
  styles
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={id} className="form-label">
        {labelText}
      </Form.Label>
      <Form.Control
        id={id}
        className="form-control"
        type={inputType ? inputType : 'text'}
        name={id}
        placeholder={placeholderText ? placeholderText : ''}
        onBlur={handleBlur}
        onChange={handleChange}
        value={formItem}
        required
      />
      {errorsItem && (
        <p className="py-2"
          style={
            styles
              ? styles
              : {
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#dc3545'
                }
          }
        >
          {errorsItem}
        </p>
      )}
    </Form.Group>
  )
}
