import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBotlist } from '../../core/actions/deploy';
import { BotsListTable } from '../../components/BotsListTable';

import './index.css';

class Bots extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.getBotlist();
    }

    render() {
        console.log(this.props.deployState.dbots);

        return (
            <div className="list_container">
                <div className="text-center label_big">
                    <h2>Bots List</h2>
                </div>

                <BotsListTable
                    botlist={this.props.deployState.dbots}
                    // onDetailsClick={this.handleProposalDetailsClick}
                />
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
        getBotlist: bindActionCreators(getBotlist, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bots);
