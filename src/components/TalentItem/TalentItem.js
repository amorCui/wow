import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip';


//css
import "./TalentItem.css";

class TalentItem extends Component {
    constructor(props){
        super(props);
        if(this.props.item){
            let replaceList = this.props.item.valueList[this.props.currentLevel];
            this.current_desc = this.replace(this.props.item.description,replaceList);
           
            this.next_desc = null;
            if(this.props.currentItemLevel > 0 && this.props.currentItemLevel < this.props.item.max_level){
                this.next_desc = "";
            }
        }
    }

    replace = (str,values)=>{
        values.forEach ((v,i) => {
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
                `<div class="talentItem_tips_name">${this.props.item.item_name}</div>`;
            if(this.props.item.require_item > 0){
                tooltips +=  `<div class="talentItem_tips_required">需要 ${this.props.item.require_item} 点在 ${this.props.treeName} 天赋</div>`;
            }
            tooltips += 
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

            let talentItem_border;
            let talentItem_level;
            if(this.props.currentItemLevel > 0 && this.props.currentItemLevel < this.props.item.max_level){
                talentItem_border = <div className="talentItem_border talentItem_border_green"></div>
            }
            if(this.props.currentLevel >= this.props.item.require_item && this.props.currentItemLevel < this.props.item.max_level){
                talentItem_level = 
                <div className="talentItem_level talentItem_level_green">
                    {this.props.currentItemLevel}/{this.props.item.max_level}
                </div>
            }
            if(this.props.currentItemLevel === this.props.item.max_level){
                talentItem_border = <div className="talentItem_border talentItem_border_full"></div>
                talentItem_level = 
                <div className="talentItem_level talentItem_level_full">
                    {this.props.currentItemLevel}/{this.props.item.max_level}
                </div>
            }
            if(this.props.currentItemLevel === 0){
                talentItem_border = <div className="talentItem_border"></div>
            }
            
            if(this.props.currentLevel < this.props.item.require_item ){
                talentItem_level = 
                <div className="talentItem_level">
                    {this.props.currentItemLevel}/{this.props.item.max_level}
                </div>
            }
           

            talentItem =  
            <div>
                <div className="talentItem_body" data-tip={tooltips} data-place={"bottom"} data-html={true} data-class={'talentItem_tooltips'}>
                    <img src={this.props.item.item_icon_off} alt=""/>
                    {talentItem_border}
                    {talentItem_level}
                </div>
                <ReactTooltip html={true}/>
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
