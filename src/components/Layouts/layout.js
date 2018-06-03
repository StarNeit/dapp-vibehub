import React from 'react';
import Sidemenu from '../Sidemenu';
import './layout.css';

export class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-sm-3">
                        <Sidemenu pathname={this.props.pathname}/>
                    </div>
                    <div className="col-sm-9 overflow_y">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}