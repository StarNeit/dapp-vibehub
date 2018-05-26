import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Routes from '../Routes';

const App = ({ location, isAuthenticated }) => (
    <div className="app-body">
        <Routes location={location} isAuthenticated={isAuthenticated}/>
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: false
    };
}

export default connect(mapStateToProps)(App);