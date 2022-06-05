import { Card, Col } from "reactstrap";
import React from "react";

function CatCard(props) {

    return (
        <Col>
            <Card>
                <img className="card-img-top" src="https://picsum.photos/300/150" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Name: { props.title }</h5>
                    <p className="card-text">Description: { props.description }</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </Card>
        </Col>
    );
}

export default CatCard;
