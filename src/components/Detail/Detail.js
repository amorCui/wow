import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {talentMap} from '../../data/data';

import styles from "./Detail.css";


class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profession:talentMap[this.props.match.params.talent]
        }
    }

    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div className="title" >
                <div className="title_name">
                    <img src={this.state.profession.logo} alt="" className="title_name_logo"/>
                    <div className="title_name_zh">
                        {this.state.profession.name_zh}
                    </div>
                    <div className="title_name_en">
                        {this.state.profession.name_en}
                    </div>
                </div>
                <div className="title_summary">
                    <div className="title_summary_subtitle">{this.state.profession.Duties}</div>
                    <div className="title_summary_content">{this.state.profession.summary}</div>
                </div>
            </div>
        )
    }
}


export default withRouter(Detail);
