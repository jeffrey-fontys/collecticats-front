import React from "react";

import logo from "../assets/CollectiCats_logo_trans.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3" src={logo} alt="CollectiCats logo" width="100%" />

    <p className="lead">
      CollectiCats is a web based collecting/trading game where players can collect virtual cats and trade 
      them with each other. These cats have unique properties as a result of their genes. 
      Try to collect as many special and rare cats as you can!
    </p>
  </div>
);

export default Hero;
