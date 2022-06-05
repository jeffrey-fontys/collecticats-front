import React, { Fragment } from "react";
import { Row } from "reactstrap";
import CatApi from "../utils/catApi";
import CatCard from "./CatCard";

const Overview = () => {
    const [ cats, setCats ] = React.useState();
    const API = new CatApi();
    
    React.useEffect(()  => {
        if (cats === undefined) {
            API.GetAll()
                .then(json => {
                    setCats(json._embedded.cats);
                });
        }
    });

    return (
        <Fragment>
            <Row>
                <h1>Cat overview</h1>
            </Row>
            
            <Row className="row-cols-1 row-cols-md-3 g-4 mb-3">
                { cats && 
                    cats.map(cat => (
                        <CatCard key={ cat._links.cat.href } title={ cat.name } description={ cat.description } />
                    ))
                }
            </Row>
        </Fragment>
    );
}
  
export default Overview;
