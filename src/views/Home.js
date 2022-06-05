import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Hero from "../components/Hero";
// import Content from "../components/Content";
import Overview from "../components/Overview";

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return (
      <Fragment>
        <Overview />
      </Fragment>
    );
  }
  else {
    return (
      <Fragment>
        <Hero />
      </Fragment>
    );
  }
};

export default Home;
