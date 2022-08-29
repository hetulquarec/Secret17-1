import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import FooterDark from "../../components/Footer/footerDark";

import { STORAGEKEY } from "../../Constant";

const path = window.location.pathname;

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    // {...rest}

    render={(props) => {
      if (isAuthProtected && !localStorage.getItem(STORAGEKEY.ACCESSTOKEN)) {
        return (
          <Redirect
            to={{ pathname: "/admin", state: { from: props.location } }}
          />
        );
      }
      return (
        <React.Fragment>
          {path === "/admin" || path === "/add-blog" ? null : <Header />}

          <Component {...props} />
          {path === "/blogs" ? (
            <FooterDark />
          ) : (
            <Footer /> &&
            (path === "/add-blog" || path === "/admin" ? null : <Footer />)
          )}
        </React.Fragment>
      );
    }}
  />
);

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default Authmiddleware;
