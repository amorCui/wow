import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


//components
import TalentContainer from '../TalentContainer/TalentContainer';
//css
import './TalentTree.css';
//img
//data
import { talentTree } from '../../Data/Data';


class TalentTree extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            trees: talentTree[this.props.profession.name_en],
            level_0:0,
            level_1:0,
            level_2:0
        }
    }

    handleClick = ()=>{
        console.log(2);
       
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
                        <a className="talentTree_header_button">
                            <img src={require('../../source/img/resetall.gif')} alt="" />
                        </a>
                    </div>
                </div>
                <div className="talentTree_container">
                    <TalentContainer treeList={this.state.trees.tree_0} currentLevel={this.state.level_0} handleClick={this.handleClick}></TalentContainer>
                    <TalentContainer treeList={this.state.trees.tree_1} currentLevel={this.state.level_1} handleClick={this.handleClick}></TalentContainer>
                    <TalentContainer treeList={this.state.trees.tree_2} currentLevel={this.state.level_2} handleClick={this.handleClick}></TalentContainer>
                </div>

            </div>
        )
    }

}

export default withRouter(TalentTree);