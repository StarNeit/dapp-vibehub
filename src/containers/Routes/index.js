import React from "react";
import PropTypes from "prop-types";
import { Route , Switch, Redirect } from "react-router-dom";

import UserRoute from "./UserRoute";
import GuestRoute from "./GuestRoute";
import Dashboard from '../Dashboard';
import Deposit from '../Deposit';

import { Layout, GuestLayout } from '../../components/Layouts';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { location } = this.props;

        const userPaths = ['dashboard', 'deposit', 'error'];
        // const guestPaths = ['forgot-password', 'confirmation', 'reset_password', 'error'];

        return (
            <div className="app-body">
                <Route
                    location={location}
                    path="/"
                    exact
                    component={Dashboard}
                    />
            </div>

        //     <div className="app-body">
        //         {isAuthenticated &&
        //         <Switch>
        //             <Layout pathname={location.pathname}>
        //                 <Route locantion={location} path="/confirmation/:token" exact component={ConfirmationPage} />
        //                 <Route locantion={location} path="/confirmation" exact component={InvalidPage} />
        //                 <Route locantion={location} path="/reset_password/:token" exact component={ResetPasswordPage} />
        //                 <Route locantion={location} path="/reset_password" exact component={InvalidPage} />
        //                 <UserRoute
        //                     location={location}
        //                     path="/dashboard"
        //                     exact
        //                     component={Dashboard}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/deposit"
        //                     exact
        //                     component={Deposit}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/purchase"
        //                     exact
        //                     component={Purchase}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/history"
        //                     exact
        //                     component={History}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/referral"
        //                     exact
        //                     component={Referral}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/support"
        //                     exact
        //                     component={Support}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/security"
        //                     exact
        //                     component={Security}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/profile"
        //                     exact
        //                     component={Profile}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/transfer"
        //                     exact
        //                     component={Transfer}
        //                 />
        //                 <UserRoute
        //                     location={location}
        //                     path="/error"
        //                     exact
        //                     component={Error}
        //                 />
        //                 { location.pathname == '/' && <Redirect to='/dashboard'/> }
        //                 { location.pathname != '/' &&  userPaths.indexOf(location.pathname.split("/")[1]) == -1 && <Redirect to='/error'/> }
        //             </Layout>
        //         </Switch>}
        //     {!isAuthenticated &&
        //     <Switch>
        //         <GuestLayout>
        //             <Route location={location} path="/" exact component={Home} />
        //             <Route locantion={location} path="/confirmation/:token" exact component={ConfirmationPage} />
        //             <Route locantion={location} path="/confirmation" exact component={InvalidPage} />
        //             <Route locantion={location} path="/reset_password/:token" exact component={ResetPasswordPage} />
        //             <Route locantion={location} path="/reset_password" exact component={InvalidPage} />
        //             <GuestRoute
        //                 location={location}
        //                 path="/error"
        //                 exact
        //                 component={Error}
        //             />
        //             <GuestRoute
        //                 location={location}
        //                 path="/forgot-password"
        //                 exact
        //                 component={ForgotPassword}
        //             />
        //             { location.pathname != '/' && guestPaths.indexOf(location.pathname.split("/")[1]) == -1 && <Redirect to='/error'/> }
        //         </GuestLayout>
        //     </Switch>}
        // </div>
        )}
}

Routes.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default Routes;