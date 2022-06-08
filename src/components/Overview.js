import React, { Fragment } from "react";
import { Row } from "reactstrap";
import CatApi from "../utils/catApi";
import CatCard from "./CatCard";
import { useAuth0 } from "@auth0/auth0-react";
import catImg1 from "../assets/logo.png";
import catImg2 from "../assets/Collecticats_Cat_Base.png";
import catImg3 from "../assets/Collecticats_Cat_Base2.png";

function notReady() {
    alert("Sorry, this function is not ready yet. :(");
}

const Overview = () => {
    const [ cats, setCats ] = React.useState();
    const { user } = useAuth0();
    const API = new CatApi();
    const catImgs = [catImg1, catImg2, catImg3] // temp
    
    React.useEffect(() => {
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
                <h1>Hi { user.nickname }! These are your cats!</h1>
            </Row>

            <Row className="mb-3">
                <a href="#" className="btn btn-primary" onClick={ notReady }>Breed selected cats</a>
            </Row>

            <Row className="row-cols-1 row-cols-md-3 g-4 mb-3">
                { cats && 
                    cats.map((cat, key) => (
                        <CatCard 
                            key={ cat._links.cat.href }
                            cat={ cat }
                            imgSrc={ catImgs[key] } />
                    ))
                }
            </Row>
        </Fragment>
    );
}
  
export default Overview;
