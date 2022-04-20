import React from "react";

import logo from "../assets/CollectiCats_logo_trans.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3" src={logo} alt="CollectiCats logo" width="100%" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
