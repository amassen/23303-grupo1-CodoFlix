import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function InputMoviesSearch(props) {
  return (

    <>
    <InputGroup size="sm" className="p-2 m-3 w-25 ">
     
      <Form.Control 
        value={props.searchInput}
        onChange={props.searcher}
        type="text"
        placeholder="Search"
        className="form-control "
      /> <Button variant="warning"  className="rounded  p-2 m-3"
                
                onClick={props.handleSearch}>
        Buscar
      </Button>
    </InputGroup>

</>

  );
}