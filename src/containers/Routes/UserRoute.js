import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
    />
);

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    // console.log("-----UserRoute-------");
    // console.log(state.rootReducer.auth.token);
    // console.log("-----UserRoute-------");

    return {
        isAuthenticated: !!state.rootReducer.auth.token
    };
}

export default connect(mapStateToProps)(UserRoute);
