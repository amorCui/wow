import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip';


//css
import "./TalentItem.css";

class TalentItem extends Component {
    constructor(props){
        super(props);
        console.log(this.props.item);
        
        if(this.props.item){
            let replaceList = this.props.item.valueList[this.props.currentLevel];
            this.current_desc = this.replace(this.props.item.description,replaceList);
           
            this.next_desc = null;
            if(this.props.currentLevel > 0 && this.props.currentLevel < this.props.item.max_level){
                this.next_desc = "";
            }
        }
    }

    replace = (str,values)=>{
        values.forEach ((v,i) => {
            console.log("value:",v);
            str = str.replace("{$" + i + "}",v);
        });
        return str; 
    }


    render() {
        let tooltips ;
           

        let talentItem;
        if(this.props.item){
            tooltips =  
            `<div>` +
                `<div class="talentItem_tips_name">${this.props.item.item_name}</div>` +
                `<div class="talentItem_tips_level">等级:${this.props.currentLevel}/${this.props.item.max_level}</div>` + 
                `<div class="talentItem_tips_current_desc">${this.current_desc}</div>`;
            if(this.props.currentLevel === this.props.item.max_level){
                tooltips +=  `<div class="talentItem_tips_next_desc talentItem_tips_cancel">
                                右键单击取消
                            </div>`;
            }
            if(this.props.currentLevel === 0){
                tooltips += `<div class="talentItem_tips_next_desc talentItem_tips_learn">
                                点击学习
                            </div>`;
            }
            if(this.props.currentLevel > 0 && this.props.currentLevel < this.props.item.max_level){
                tooltips += `<div class="talentItem_tips_next_desc">
                                <div>下一等级</div>
                                <div>${this.next_desc}</div>
                            </div>`;
            }
            tooltips +=
            `</div>`;


            talentItem =  
            <div>
                <div className="talentItem_border " data-tip={tooltips} data-place={"bottom"} data-html={true} data-class={'talentItem_tooltips'}>
                    <img src={this.props.item.item_icon_off} alt=""/>
                    <div className="talentItem_level">
                        {this.props.currentLevel}/{this.props.item.max_level}
                    </div>
                </div>
                <ReactTooltip html={true}/>
             </div>
        }else{
            talentItem =  
            <div>
                <div className="talentItem_border ">
                    <img src="" alt=""/>
                </div>
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
