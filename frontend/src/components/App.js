import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Investors from './layout/investors/Investors';
import CurrentInvestor from './layout/investors/CurrentInvestor';
import InvestorForm from './layout/investors/InvestorForm';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoutes from './common/PrivateRoutes';
import { loadUser } from '../actions/auth';

import '../index.css';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="layout-body">
                        <Header />
                        <div className="content">
                            <Switch>
                                <PrivateRoutes exact path="/" component={Investors} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/register" component={Register} />
                                <PrivateRoutes exact path="/add-investor" component={InvestorForm} />
                                <PrivateRoutes exact path="/investors/:id" component={CurrentInvestor} />
                                {/* <Investors /> */}
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));