import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import './guestLayout.css';

export class GuestLayout extends React.Component<{}, {}> {
    render() {
        return (
            <div className="main">
                {/*<Header/>*/}
                <div className="">
                    { this.props.children }
                </div>
                {/*<Footer/>*/}
            </div>
        )
    }
}
