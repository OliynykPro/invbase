import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getInvestors } from '../../../actions/investors';

import './Investors.css';

import investor_img from '../../../images/icons/investor.png';

export class Investors extends Component {
    static propTypes = {
        investors: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getInvestors();
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid investors">
                    <div className="row title-row">
                        <div className="col-sm-9">
                            <h1>Investors List</h1>
                        </div>
                        <div className="col-sm-3">
                            <Link to="/add-investor/">
                                <button className="btn btn-primary button-custom float-right">Add investor</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row list">
                        {this.props.investors.map((investor) => (
                            <div key={investor.id} className="col-sm-12 col-md-3 investor-item mb-4">
                                <div>
                                    <p># {investor.id}</p>
                                    <p><img src={investor_img} alt={investor.company_name} /></p>
                                    <p className="company_name"><Link to={`/investors/${investor.id}`}>{investor.company_name}</Link></p>
                                    <p className="website_url"><a href={investor.website_url} target="_blank">{investor.website_url}</a></p>
                                    <p className="buttons_group">
                                        {/* <a href="#">Edit</a>
                                        <span> | </span> */}
                                        <Link to={`/investors/${investor.id}`}>More info</Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    investors: state.investors.investors
})

export default connect(mapStateToProps, { getInvestors })(Investors);
