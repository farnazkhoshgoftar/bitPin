import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Market from "../pages/market";
import Favorites from "../pages/favorites";
const Routes = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/pages/1" />;
        }}
      />

      <Route path="/pages/:pageNumber" component={Market} exact />

      <Route path="/favorites" component={Favorites} />
    </Router>
  );
};

export default Routes;
