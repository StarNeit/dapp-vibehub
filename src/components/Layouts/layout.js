import React from 'react';
// import TempHeader from '../../components/TempHeader';
// import Footer from '../../components/Footer';
// import SideMenu from '../../components/SideMenu';
// import './layout.css';

export class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                {/*<div className="main_header">*/}
                    {/*<TempHeader/>*/}
                {/*</div>*/}
                {/*<div className="main_layout">*/}
                    {/*<div className="main_layout__sidemenu">*/}
                        {/*<SideMenu pathname={this.props.pathname}/>*/}
                    {/*</div>*/}
                    {/*<div className="main_layout__content">*/}
                        {/*<div className="">*/}
                            { this.props.children }
                        {/*</div>*/}
                        {/*<Footer/>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
