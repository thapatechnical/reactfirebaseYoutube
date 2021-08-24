import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink to="/">back to homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default Error404;
