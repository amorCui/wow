import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip';


//css
import "./TalentItem.css";

class TalentItem extends Component {
    constructor(props){
        super(props);
    }

    replace = (str,values)=>{
        
        if(values && values.length > 0){
            values.forEach ((v,i) => {
                str = str.replace("{$" + i + "}",v);
            });
        }else{

            console.log("str:",str)
        }
       
        return str; 
       
    }

    handleClick = (e)=>{
        if(this.props.currentItemLevel < this.props.item.max_level && this.props.currentLevel >= this.props.item.require_item ){
            this.props.handleClick(e);
        }
    }


    render() {
        let tooltips ;
        let current_desc = null;
        let next_desc = null;

        let currentItemLevel = parseInt(this.props.currentItemLevel);
        let max_level;
        let currentLevel;
        let require_item;
        let talentItem;
        if(this.props.item){
            
            max_level = parseInt(this.props.item.max_level);
            currentLevel = parseInt(this.props.currentLevel);
            require_item = parseInt(this.props.item.require_item);

            let replaceList = this.props.item.valueList[this.props.currentItemLevel > 0 ?this.props.currentItemLevel - 1 : this.props.currentItemLevel];
            current_desc = this.replace(this.props.item.description,replaceList);
            
            if(this.props.currentItemLevel > 0 && this.props.currentItemLevel < this.props.item.max_level){
                let replaceList = this.props.item.valueList[this.props.currentItemLevel];
                next_desc = this.replace(this.props.item.description,replaceList);
            }
           
      
            tooltips =  
            `<div>` +
                `<div class="talentItem_tips_name">${this.props.item.item_name}</div>`;
            tooltips += `<div class="talentItem_tips_level">等级:${currentItemLevel}/${max_level}</div>`;
            if(require_item > 0){
                tooltips +=  `<div class="talentItem_tips_required">需要 ${require_item} 点在 ${this.props.treeName} 天赋</div>`;
            }
            tooltips += `<div class="talentItem_tips_current_desc">${current_desc}</div>`;
            if(currentItemLevel === max_level){
                tooltips +=  `<div class="talentItem_tips_next_desc talentItem_tips_cancel">
                                右键单击取消
                            </div>`;
            }
            if(currentItemLevel === 0){
                tooltips += `<div class="talentItem_tips_next_desc talentItem_tips_learn">
                                点击学习
                            </div>`;
            }
            if(currentItemLevel > 0 && currentItemLevel < max_level){
                tooltips += `<div class="talentItem_tips_next_desc">
                                <div>下一等级</div>
                                <div>${next_desc}</div>
                            </div>`;
            }
            tooltips +=
            `</div>`;

            let talentItem_border;
            let talentItem_level;
            let talentItem_img;

            if(currentItemLevel > 0 && currentItemLevel <= max_level){
                talentItem_border = <div className="talentItem_border talentItem_border_green"></div>
            }
            if(currentLevel >= require_item && currentItemLevel <= max_level){
                talentItem_level = 
                <div className="talentItem_level talentItem_level_green">
                    {currentItemLevel}/{max_level}
                </div>
            }
            if(currentItemLevel === max_level){
                talentItem_border = <div className="talentItem_border talentItem_border_full"></div>
                talentItem_level = 
                <div className="talentItem_level talentItem_level_full">
                    {currentItemLevel}/{max_level}
                </div>
            }
            if(currentItemLevel === 0){
                talentItem_border = <div className="talentItem_border"></div>
            }
            
            if(currentLevel < require_item ){
                talentItem_level = 
                <div className="talentItem_level">
                    {currentItemLevel}/{max_level}
                </div>
            }
            if(currentItemLevel === 0){
                talentItem_img = 
                <img src={this.props.item.item_icon_off} alt=""/>
            }else{
                talentItem_img = 
                <img src={this.props.item.item_icon} alt=""/>
            }
           

            talentItem =  
            <div onClick={this.handleClick} data-tree_index={this.props.treeIndex} data-item_num={this.props.itemNum}>
                <div className="talentItem_body" data-tip={tooltips} data-place={"bottom"} data-html={true} data-class={'talentItem_tooltips'}>
                    {talentItem_img}
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
