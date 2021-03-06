import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link} from "react-router-dom";

import TopNavBar from "../../components/TopNavBar";
import {fetchLocListIfNeeded} from "../../actions/fetchActions";
import {deleteLoc} from "../../actions/deleteActions";

class LocationEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSent: false
        };
    }

    static propTypes = {
        locList: PropTypes.object,
        isLocListReady: PropTypes.bool
    };

    componentDidMount() {
        this.props.fetchLocListIfNeeded();
    }

    deleteLocation = () => {
        this.props.deleteLoc(this.props.match.params.id);

        this.setState({
            formSent: true
        })
    };

    render() {
        const locationID = this.props.match.params.id;
        if (this.state.formSent) {
            return (
                <div>
                    <TopNavBar currentPage={this.props.match}/>
                    <div className="callbackDiv">
                        <h2>Location {locationID} has been deleted.</h2>
                        <Link to={"/location"}>
                            <button className="neutralBtn">Return</button>
                        </Link>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <TopNavBar currentPage={this.props.match}/>
                {this.props.isLocListReady ?
                    Object.keys(this.props.locList).includes(locationID) ?
                        <div className="delDiv">
                            <h2>Are you sure you want to <b>delete</b> location {locationID}?</h2>
                            <Link to={"/location"}>
                                <button className="neutralBtn">Cancel</button>
                            </Link>
                            <button className="badBtn" onClick={this.deleteLocation}>Delete it</button>
                        </div> :
                        "There's no such location in the database"
                    : "Fetching list of locations..."}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        locList: state.fetchReducer.locList,
        isLocListReady: state.fetchReducer.isLocListReady
    }
};

export default connect(mapStateToProps, {fetchLocListIfNeeded, deleteLoc})(LocationEdit)