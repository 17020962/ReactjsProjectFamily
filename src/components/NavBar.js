import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <nav className="nav">
                <div className="nav__header">
                    <Link to='/' >
                        <img src={logo} alt="family-logo" className="nav__header-logo" />
                    </Link>
                    <span className="nav__header-btn" onClick={this.handleToggle} >
                        <i className="fas fa-bars" />
                    </span>
                </div>

                <ul className={this.state.isOpen ? "nav__links showNav" : "nav__links"}>
                    <li>
                        <Link to='/' className="nav__single-link">Home</Link>
                    </li>
                    <li>
                        <Link to='/news/page/1' className="nav__single-link">News</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="nav__single-link">Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
