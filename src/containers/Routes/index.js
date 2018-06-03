import React from "react";
import PropTypes from "prop-types";
import { Route , Switch, Redirect } from "react-router-dom";

import UserRoute from "./UserRoute";
import Dashboard from '../Dashboard';
import Bots from '../Bots';
import Admin from '../Admin';
import Error from '../Error';

import { Layout } from '../../components/Layouts';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { location } = this.props;
        const userPaths = ['dashboard', 'bots', 'admin', 'error'];

        return (
            <div className="app-body">
                <Switch>
                    <Layout pathname={location.pathname}>
                        <UserRoute
                            location={location}
                            path="/dashboard"
                            exact
                            component={Dashboard}
                        />
                        <UserRoute
                            location={location}
                            path="/bots"
                            exact
                            component={Bots}
                        />
                        <UserRoute
                            location={location}
                            path="/admin"
                            exact
                            component={Admin}
                        />
                        <UserRoute
                            location={location}
                            path="/error"
                            exact
                            component={Error}
                        />
                        { location.pathname == '/' && <Redirect to='/dashboard'/> }
                        { location.pathname != '/' &&  userPaths.indexOf(location.pathname.split("/")[1]) == -1 && <Redirect to='/error'/> }
                    </Layout>
                </Switch>
            </div>
        )}
}

Routes.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default Routes;