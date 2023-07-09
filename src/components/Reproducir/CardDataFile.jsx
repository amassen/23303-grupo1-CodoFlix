import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { URL_IMAGE } from "../template/Home/Constants/constantsApi";


export default function CardData(props) {
    return (
      <div>
        {props.showData && (
          <Container className="m-0 p-0">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-lg-8">
                <Card className="m-5 shadow-lg rounded">
                  <div className="bg-white p-3 m-1 mt-3 rounded">
                    <img
                      className="card-img-top rounded img-fluid"
                      src={`${URL_IMAGE + props.showData.poster_path}`}
                      alt="Show poster"
                    />
                    <Card.Body>
                      <div className="d-flex flex-column">
                        <ListGroup
                          variant="flush"
                          className="list-unstyled text-center"
                        >
                          <ListGroup.Item>
                            <span className="fs-2 text-uppercase">
                              {props.showData.original_title}
                            </span>{" "}
                            <span className="fs-6">{props.status}</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="fs-5">
                              {props.showData.overview}
                            </span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="fw-bold m-4 mb-0 fs-5">
                              Generos:{" "}
                            </span>
                            <span className="fs-5">{props.genreElements}</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="fs-5">{props.seasonsElements}</span>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        )}
      </div>
    );
  }
  