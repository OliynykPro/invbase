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
                            <h1>Investors name</h1>
                        </div>
                    </div>
                    {this.props.current_investor.company_name}
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
