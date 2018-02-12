import React from 'react';
import './style.scss';import Menu from "../Menu";

class Header extends React.Component {
    render() {
        const { menu } = this.props.data;

        return (
            <div>
                <div className="header">
                    <div className="header__inner">
                        <Menu data={menu}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

