import React, { Component } from 'react';
import './Header.css';
import '../../../index.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';

export class Header extends Component {
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <button className="btn btn-secondary button-custom" onClick={this.props.logout} type="button" >
                <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                    Logout
            </button>
        );

        const guestLinks = (
            <div>
                {/* <p><Link to="/register">Register</Link></p> */}

                <button className="btn btn-secondary button-custom" type="button">
                    <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                    <Link to="/login">Login</Link>
                </button>
            </div>
        );

        return (
            <header className="navbar navbar-expand-sm navbar-light header-main">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="/"><img src={logo} alt="InvestorBASE" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">All investors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add investor</a>
                            </li> */}
                        </ul>
                    </div>
                    <strong>{user ? `Hello, ${user.username}` : ''}</strong>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </header >
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
