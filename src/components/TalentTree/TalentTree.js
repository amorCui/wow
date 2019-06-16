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
            trees: talentTree.Warrior
        }
    }

    render() {
        return (
            <div className="talentTree">

                <div className="talentTree_header">
                    <div className="talentTree_header_profession">
                        <div>{this.state.trees.name}</div>
                        <div>(0/0/0)</div>
                    </div>
                    <div className="talentTree_header_level">
                        需要等级：60
                        </div>
                    <div className="talentTree_header_pointer">
                        剩余点数 60
                        </div>
                    <div className="talentTree_header_button_group">
                        <a className="talentTree_header_button">
                            <img src={require('../../source/img/resetall.gif')} alt="" />
                        </a>
                    </div>
                </div>
                <div className="talentTree_container">
                    <TalentContainer treeList={this.state.trees.tree_0}></TalentContainer>
                    <TalentContainer treeList={this.state.trees.tree_1}></TalentContainer>
                    <TalentContainer treeList={this.state.trees.tree_2}></TalentContainer>
                </div>

            </div>
        )
    }

}

export default withRouter(TalentTree);