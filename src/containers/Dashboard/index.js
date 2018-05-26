import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTestData } from '../../core/actions/test';

class Dashboard extends Component {

    getTestDt = () => {
        this.props.getTestData();
    }

    render() {
        return (
            <div>
               <h1>Dashboard</h1>
                <h5>Axios</h5>
                <button onClick={this.getTestDt}>Click Me</button>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        testState: state.rootReducer.test
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTestData: bindActionCreators(getTestData, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
