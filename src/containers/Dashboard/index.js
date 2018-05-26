import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTestData } from '../../core/actions/test';

import './index.css';

class Dashboard extends Component {

    getTestDt = () => {
        this.props.getTestData();
    }

    render() {
        return (
            <div>
                <div className="text-center label_big">
                    <h2>Deploy Bots</h2>
                </div>

                <div className="createbot_container">
                    <div className="row">
                        <div className="col-xs-3 bot_label">
                            Number of bots:
                        </div>
                        <div className="col-xs-9">
                            <input type="number" className="form-control bot_input" defaultValue={0}/>
                            <div>
                                It represents the number of bots we would deploy.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 bot_label">
                            Period Days:
                        </div>
                        <div className="col-xs-9">
                            <input type="number" className="form-control bot_input" defaultValue={0}/>
                            <div>
                                It represents the length of time the bots have to spend the allocated funds.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 bot_label">
                            Total Fund:
                        </div>
                        <div className="col-xs-9">
                            <input type="number" className="form-control bot_input" defaultValue={0}/>
                            <div>
                                It represents the funds that each bot will have.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 bot_label">
                            Gas Fee:
                        </div>
                        <div className="col-xs-9">
                            <input type="number" className="form-control bot_input" defaultValue={0}/>
                            <div>
                                It represents the Gas amount bots will spend on each transaction.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-9">
                            <div className="text-center">
                                <button className="form-control btn-deploy-bot">DEPLOY</button>
                            </div>
                        </div>
                    </div>
                </div>
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
