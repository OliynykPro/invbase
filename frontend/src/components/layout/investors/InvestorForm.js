import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getInteractionStatuses, getTypesOfInvestor, addInvestor } from '../../../actions/investors';

export class InvestorForm extends Component {
    state = {
        company_name: '',
        email: '',
        website_url: '',
        investor_location: '',
        investment_focus: '',
        company_description: '',
        investor_portfolio: '',
        investor_rating: '',
        interaction_status: [],
        type_of_investor: []
    }

    componentDidMount() {
        this.props.getInteractionStatuses();
        this.props.getTypesOfInvestor();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.investor_rating);
    }

    onChangeArrayData = (e) => {
        this.setState({ [e.target.name]: [+e.target.value] });
        console.log(this.state.interaction_status);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { company_name, email, website_url, investor_location, investment_focus, company_description, investor_portfolio, investor_rating, interaction_status, type_of_investor } = this.state;
        const investor = { company_name, email, website_url, investor_location, investment_focus, company_description, investor_portfolio, investor_rating, interaction_status, type_of_investor };
        let history = this.props.history;
        this.props.addInvestor(investor, history);
        // console.log('tph', this.props.history);
    }

    render() {
        const { company_name, email, website_url, investor_location, investment_focus, company_description, investor_portfolio, investor_rating, interaction_status, type_of_investor } = this.state;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row title-row">
                        <div className="col-sm-12">
                            <h1>Add investor</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <form onSubmit={this.onSubmit}>

                                {/* COMPANY NAME */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter company name, that you want to add</b></p>
                                        <p>This is should be name of investors company</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Company name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="company_name"
                                            onChange={this.onChange}
                                            value={company_name}
                                        />
                                    </div>
                                </div>
                                {/* END OF COMPANY NAME */}

                                {/* COMPANY EMAIL */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter company email, that you want to add</b></p>
                                        <p>This is should be email that can be used to send an suggestion to investor</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            onChange={this.onChange}
                                            value={email}
                                        />
                                    </div>
                                </div>
                                {/* END OF COMPANY EMAIL */}

                                {/* INVESTOR'S WEBSITE */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter company website, that you want to add</b></p>
                                        <p>This is should be website of investors company</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Company website</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="website_url"
                                            onChange={this.onChange}
                                            value={website_url}
                                        />
                                    </div>
                                </div>
                                {/* END OF INVESTOR'S WEBSITE */}

                                {/* INVESTOR'S LOCATION */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter company location, that you want to add</b></p>
                                        <p>This is should be countru and city (cities), where based company office</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Company location</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="investor_location"
                                            onChange={this.onChange}
                                            value={investor_location}
                                        />
                                    </div>
                                </div>
                                {/* END OF INVESTOR'S LOCATION */}

                                {/* INVESTMENT FOCUS */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter investment focus of company</b></p>
                                        <p>This is should information about companies that inverstor interesting in</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Investment focus</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="investment_focus"
                                            rows="3"
                                            onChange={this.onChange}
                                            value={investment_focus}
                                        />
                                    </div>
                                </div>
                                {/* END OF INVESTMENT FOCUS */}

                                {/* COMPANY DESCRIPTION */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter short description of the company</b></p>
                                        <p>This is should be main information about investor</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Company description</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="company_description"
                                            rows="3"
                                            onChange={this.onChange}
                                            value={company_description}
                                        />
                                    </div>
                                </div>
                                {/* END OF COMPANY DESCRIPTION */}

                                {/* INVESTOR'S PORTFOLIO */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter investors portfolio</b></p>
                                        <p>This should be websites of companies, that get investments (Please, put comma "," after each website)</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Investors portfolio</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="investor_portfolio"
                                            rows="3"
                                            onChange={this.onChange}
                                            value={investor_portfolio}
                                        />
                                    </div>
                                </div>
                                {/* END OF INVESTOR'S PORTFOLIO */}

                                {/* INVESTOR'S RATING */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter investors rating</b></p>
                                        <p>This should be from 1 to 10</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Investor rating (From 1 to 10)</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="investor_rating"
                                            onChange={this.onChange}
                                            value={investor_rating}
                                        />
                                        {/* <div className="form-group">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="investor_rating" className="custom-control-input" value={investor_rating} onChange={this.onChange} />
                                                <label className="custom-control-label" for="customRadio1">1</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="customRadio2">2</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="customRadio3">3</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="customRadio3">4</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="customRadio3">5</label>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                {/* END OF INVESTOR'S PORTFOLIO */}

                                {/* INTERACTION STATUS */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter investors portfolio</b></p>
                                        <p>This should be websites of companies, that get investments (Please, put comma "," after each website)</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Investors portfolio</label>
                                        <select id="lang" name="interaction_status" onChange={this.onChangeArrayData} value={interaction_status}>
                                            <option >-----</option>
                                            {this.props.interaction_statuses.map((status) => (
                                                <option value={status.id}>{status.interaction_status}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* END OF INTERACTION STATUS */}

                                {/*  TYPE OF INVESTOR */}
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <p><b>Enter investors portfolio</b></p>
                                        <p>This should be websites of companies, that get investments (Please, put comma "," after each website)</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 form-group">
                                        <label>Investors portfolio</label>
                                        <select id="lang" name="type_of_investor" onChange={this.onChangeArrayData} value={type_of_investor}>
                                            <option >-----</option>
                                            {this.props.types_of_investor.map((type) => (
                                                <option value={type.id}>{type.type_of_investor}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* END OF TYPE OF INVESTOR */}
                                <button type="submit" className="btn btn-primary button-custom">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    interaction_statuses: state.investors.interaction_statuses,
    types_of_investor: state.investors.types_of_investor
})

export default compose(withRouter, connect(mapStateToProps, { getInteractionStatuses, getTypesOfInvestor, addInvestor }))(InvestorForm)
