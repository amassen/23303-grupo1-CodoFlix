import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { URL_IMAGE } from "../Constants/constantsApi";


export default function SearchResults(props) {
  return (
    <Container className="p-1">
      <Carousel controls slide={false} indicators={false}>
        {props.results.map((show, index) => (
          <Carousel.Item
            className={`${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row">
              {props.results.slice(index, index + 4).map((movieItem) => (
                <div
                  className="col-md-3 p-2 d-flex align-items-stretch"
                  key={movieItem.id}
                >
                  <Card className="m-6" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top .img-fluid .img-thumbnail"
                      src={`${URL_IMAGE + movieItem.poster_path}`}
                      alt="Card image cap"
                    />
                    <Card.Body>
                      <div className="d-flex flex-column">
                        <ListGroup variant="flush">
                          <Link
                            to={`/reproducir/${movieItem.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <ListGroup.Item className="fs-2">
                              {movieItem.original_title}
                            </ListGroup.Item>
                          </Link>
                          <ListGroup.Item className="fs-6">
                            Fecha de estreno: {movieItem.release_date}
                          </ListGroup.Item>
                          <ListGroup.Item className="fs-6  ">
                            <div className="  " >
                            <p className="display: block text-truncate">{movieItem.overview}[...]</p>
                        </div>  </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
