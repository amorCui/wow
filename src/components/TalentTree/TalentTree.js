import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


//components
import TalentContainer from '../TalentContainer/TalentContainer';
//css
import './TalentTree.css';
//img
//data
import { talentTree } from '../../Data/Data';
import { tsCallSignatureDeclaration } from '@babel/types';


class TalentTree extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            trees: talentTree[this.props.profession.name_en],
            level_0:0,
            level_1:0,
            level_2:0,
            currentValueList_0:"0000000000000000000000000000",
            currentValueList_1:"0000000000000000000000000000",
            currentValueList_2:"0000000000000000000000000000"
        }
    }

    handleClick = (e,callback)=>{
        if(51 - this.state.level_0 - this.state.level_1 - this.state.level_2 > 0){
            let target = e.currentTarget;
            let treeIndex = parseInt(target.dataset["tree_index"]);
            let trees = this.state.trees;
            let tree = this.state.trees[`tree_${treeIndex}`].tree;
            let itemNum = target.dataset["item_num"];
            let line,item;
            if(itemNum && itemNum.split("_").length >= 2){
                line = parseInt(itemNum.split("_")[0]);
                item = parseInt(itemNum.split("_")[1]);
            }

            if(typeof callback === 'function'){
                callback();
            }

            // this.setState((prevState, props)=>({
            //     trees:prevState.trees,
            //     level_0:prevState.level_0,
            //     level_1:prevState.level_1,
            //     level_2:prevState.level_2
            // }))
            let currentValueList;
            if(treeIndex === 0){
                currentValueList = this.changeLevelList(this.state.currentValueList_0,line,item);
                this.setState((state)=>({
                    level_0:state.level_0 + 1,
                    currentValueList_0:currentValueList
                }))
            }
            if(treeIndex === 1){
                currentValueList = this.changeLevelList(this.state.currentValueList_1,line,item);
                this.setState((state)=>({
                    level_1:state.level_1 + 1,
                    currentValueList_1:currentValueList
                }))
            }
            if(treeIndex === 2){
                currentValueList = this.changeLevelList(this.state.currentValueList_2,line,item);
                this.setState((state)=>({
                    level_2:state.level_2 + 1,
                    currentValueList_2:currentValueList
                }))
            }
        }
    }

    resetTree = (treeIndex)=>{
        if(treeIndex === 0){
            this.setState((state)=>({
                level_0:0,
                currentValueList_0:"0000000000000000000000000000"
            }))
        }
        if(treeIndex === 1){
            this.setState((state)=>({
                level_1:0,
                currentValueList_1:"0000000000000000000000000000"
            }))
        }
        if(treeIndex === 2){
            this.setState((state)=>({
                level_2:0,
                currentValueList_2:"0000000000000000000000000000"
            }))
        }
    }

    resetAll = ()=>{
        this.resetTree(0);
        this.resetTree(1);
        this.resetTree(2);
    }

    /**
     * 根据字符串更新等级
     * @param levelList 等级字符串
     * @param line 行号
     * @param item 列号
     * @param type add or min
     */
    changeLevelList = (levelList,line,item,type)=>{
        let newList = "";
        let currentItemLevel;
        let index = line * 4 + item;
        if(line > 0 || item > 0){
            newList += levelList.substring(0,index);
        }
        if(type === undefined || type === "add"){
            currentItemLevel = parseInt(levelList.substring(index , index + 1)) + 1;
            newList +=  currentItemLevel;
        }
        if(type === "min"){
            if(parseInt(levelList.subString(index , index + 1)) > 0){
                currentItemLevel = parseInt(levelList.substring(index , index + 1)) - 1;
                newList +=  currentItemLevel;
            }
        }
        
        if(index <= newList.length){
            newList += levelList.substring(index + 1);
        }
       
        return newList;
    }

    render() {
        return (
            <div className="talentTree">
                <div className="talentTree_header">
                    <div className="talentTree_header_profession">
                        <div>{this.state.trees.name}</div>
                        <div>({this.state.level_0}/{this.state.level_1}/{this.state.level_2})</div>
                    </div>
                    <div className="talentTree_header_level">
                        需要等级：{9 + this.state.level_0 + this.state.level_1 + this.state.level_2}
                        </div>
                    <div className="talentTree_header_pointer">
                        剩余点数 { 51 - this.state.level_0 - this.state.level_1 - this.state.level_2}
                        </div>
                    <div className="talentTree_header_button_group">
                        <a className="talentTree_header_button" onClick={this.resetAll}>
                            <img src={require('../../source/img/resetall.gif')} alt="" />
                        </a>
                    </div>
                </div>
                <div className="talentTree_container">
                    <TalentContainer treeIndex={0} treeList={this.state.trees.tree_0} currentTreeLevel={this.state.level_0} currentValueList={this.state.currentValueList_0} handleClick={this.handleClick} resetTree={this.resetTree}></TalentContainer>
                    <TalentContainer treeIndex={1} treeList={this.state.trees.tree_1} currentTreeLevel={this.state.level_1} currentValueList={this.state.currentValueList_1} handleClick={this.handleClick} resetTree={this.resetTree}></TalentContainer>
                    <TalentContainer treeIndex={2} treeList={this.state.trees.tree_2} currentTreeLevel={this.state.level_2} currentValueList={this.state.currentValueList_2} handleClick={this.handleClick} resetTree={this.resetTree}></TalentContainer>
                </div>
            </div>
        )
    }

}

export default withRouter(TalentTree);