import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCurrentInvestor } from '../../../actions/investors';

export class CurrentInvestor extends Component {
    static propTypes = {
        current_investor: PropTypes.array.isRequired
    };

    componentDidMount() {
        let id = this.props.match.params.id;

        this.props.getCurrentInvestor(id);
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Investor #{this.props.current_investor.id}</h1>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span><b>Company name: </b></span>
                        <p>{this.props.current_investor.company_name}</p>
                    </div>
                    <div className="mb-4">
                        <span><b>Company description: </b></span>
                        <p>{this.props.current_investor.company_description}</p>
                    </div>
                    <div className="mb-4">
                        <span><b>Company location: </b></span>
                        <p>{this.props.current_investor.investor_location}</p>
                    </div>
                    <div className="mb-4">
                        <span><b>Company email: </b></span>
                        <p>{this.props.current_investor.email}</p>
                    </div>
                    <div className="mb-4">
                        <span><b>Investment focus: </b></span>
                        <p>{this.props.current_investor.investment_focus}</p>
                    </div>
                    <div className="mb-4">
                        <span><b>Investment portfolio: </b></span>
                        <p>{this.props.current_investor.investor_portfolio}</p>
                    </div>
                    <div className="mb-4">
                        <span><b>Company website: </b></span>
                        <p>{this.props.current_investor.website_url}</p>
                    </div>
                    {/* {this.props.investors.map((investor) => (
                        <div key={investor.id} className="col-sm-12 col-md-4">
                            <p>{investor.id}</p>
                            <p><Link to={`/investors/${investor.id}`}>{investor.company_name}</Link></p>
                            <p><a href={"mailto:" + investor.email}>{investor.email}</a></p>
                        </div>
                    ))} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    current_investor: state.investors.current_investor
})

export default connect(mapStateToProps, { getCurrentInvestor })(CurrentInvestor);
