import { Card, Col } from "reactstrap";
import React from "react";

function CanBreed(cat) {
    const interval = Date.now() - new Date(cat.lastBred);
    const timespan = 1 * 86400000 // Days * milliseconds in a day

    return (cat.canBreed && interval > timespan * (Math.sqrt(cat.rarity) + 1)) ? "Yes" : "No";
}

function CatCard(props) {

    return (
        <Col md="3">
            <Card className="h-100">
                <input type="checkbox"></input>
                <img 
                    className="card-img-top"
                    src={ props.imgSrc }
                    alt="Cat cap" />
                <div className="card-body">
                    <h5 className="card-title"><strong>Name:</strong> { props.cat.name }</h5>
                    <p className="card-text"><strong>Description:</strong><br />{ props.cat.description }</p>
                    <p className="card-text"><strong>Can breed:</strong> { CanBreed(props.cat) }</p>
                </div>
                <div className="card-footer">
                    <a href="/" className="btn btn-primary">Details</a>
                </div>
            </Card>
        </Col>
    );
}

export default CatCard;
