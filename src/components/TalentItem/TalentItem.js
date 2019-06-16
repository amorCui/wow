import React, { Component } from 'react'

//css
import "./TalentItem.css";

class TalentItem extends Component {
    constructor(props){
        super(props);
        console.log(this.props.item);
    }


    render() {
        let talentItem;
        if(this.props.item){
            talentItem =  
            <div className="talentItem_border ">
                <img src={this.props.item.item_icon_off} alt=""/>
            </div>
        }else{
            talentItem =  
            <div className="talentItem_border ">
                <img src="" alt=""/>
            </div>
        }


        return (
            // talentitem_on,talentitem_off,talentitem_full
            <div className="talentitem talentitem_off">
                {talentItem}
            </div>
        )
    }
}

export default TalentItem;
