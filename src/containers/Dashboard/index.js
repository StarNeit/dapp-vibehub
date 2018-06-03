import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deployBots } from '../../core/actions/deploy';
import CRingLoader from '../../components/CRingLoader';

import './index.css';

class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            bot_number: 0,
            period: 0,
            total_fund: 0,
            gas: 0
        }
    }

    deployBot = () => {
        this.props.deployBots(this.state);
    }

    numberInput = e => {
        this.setState({
            bot_number: e.target.value
        });
    }

    periodInput = e => {
        this.setState({
            period: e.target.value
        });
    }

    tFundInput = e => {
        this.setState({
            total_fund: e.target.value
        });
    }

    gasInput = e => {
        this.setState({
            gas: e.target.value
        });
    }

    render() {
        console.log("[deploybot] ", this.props.deployState.deploy_bot);

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
                            <input type="number" className="form-control bot_input" value={this.state.bot_number} onChange={this.numberInput}/>
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
                            <input type="number" className="form-control bot_input" value={this.state.period} onChange={this.periodInput}/>
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
                            <input type="number" className="form-control bot_input" value={this.state.total_fund} onChange={this.tFundInput}/>
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
                            <input type="number" className="form-control bot_input" value={this.state.gas} onChange={this.gasInput}/>
                            <div>
                                It represents the Gas amount bots will spend on each transaction.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-9">
                            <div className="text-center">
                                <button className="form-control btn-deploy-bot" onClick={this.deployBot}>DEPLOY</button>
                            </div>
                            {
                                this.props.deployState.deploy_bot === -1 &&
                                <div className="err_msg">
                                    {this.props.deployState.err_deploy_bot}
                                </div>
                            }
                            {
                                this.props.deployState.deploy_bot === 1 &&
                                <div className="success_msg">
                                    Bots deployment have been started successfully.
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <CRingLoader is_show={this.props.deployState.is_loading}/>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        deployState: state.rootReducer.deploy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deployBots: bindActionCreators(deployBots, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
