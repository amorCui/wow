import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

// data
import {talentList} from '../../Data/Data';
// css
import "./TalentList.css";

class TalentList extends Component {
    constructor(props) {
        super(props);
    }
    
    /**
     * 点击事件
     */
    handleClick = (profession,e) =>{
        e.preventDefault();
        this.props.history.push("/Detail/" + profession);
    }

    render() {
        const listItems = talentList.map((talent,index) =>
            <li key ={index} className="talent" onClick={(e) => this.handleClick(talent.name_en,e)} style={talent.divStyle}>
                <div className="talent_name">
                    <div className="talent_name_en">
                        {talent.name_en}           
                    </div>
                    <div className="talent_name_zh">
                        {talent.name_zh}           
                    </div>
                </div>
                <div className="talent_introduction">
                    {talent.summary}
                </div>
                <div className="talent_logo">
                    <img src={talent.logo} alt="" />
                </div>
            </li>
        );

        return (
            <div>
                <ul className="talentList">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default withRouter(TalentList);

