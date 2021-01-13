import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;

        if (password !== password2) {
            alert('Passwords do not match')
        } else {
            const newUser = {
                username,
                password,
                email
            }

            this.props.register(newUser);
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row title-row">
                        <div className="col-sm-12">
                            <h1>Registration form</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={this.onChange}
                                        value={username}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={this.onChange}
                                        value={email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={this.onChange}
                                        value={password}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password confirm</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password2"
                                        onChange={this.onChange}
                                        value={password2}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);

