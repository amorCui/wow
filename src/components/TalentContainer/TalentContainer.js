import React, { Component } from 'react';

//components
import TalentItem from '../TalentItem/TalentItem';

//css
import './TalentContainer.css';

class TalentContainer extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e,callback)=>{
        this.props.handleClick(e);
      
        if(typeof callback === 'function'){
            callback();
        }
    }

    resetTree = ()=>{
        this.props.resetTree(this.props.treeIndex);
    }

    render() {
        let currentValueList = this.props.currentValueList.split("");
        const treeLineList = this.props.treeList.tree.tree_line.map((treeLine,index) => {
            return(
                <div key ={index} className="talentTree_container_line">
                    <div className="talentTree_container_line_item">
                        <TalentItem treeIndex={this.props.treeIndex} itemNum={`${index}_0`} item={treeLine.item0} treeName={this.props.treeList.tree_name} currentLevel={this.props.currentTreeLevel} currentItemLevel={currentValueList[index * 4 ]} handleClick={this.handleClick}></TalentItem>
                    </div>
                    <div className="talentTree_container_line_item">
                        <TalentItem treeIndex={this.props.treeIndex} itemNum={`${index}_1`} item={treeLine.item1} treeName={this.props.treeList.tree_name} currentLevel={this.props.currentTreeLevel} currentItemLevel={currentValueList[index * 4 + 1]} handleClick={this.handleClick}></TalentItem>
                    </div>
                    <div className="talentTree_container_line_item">
                        <TalentItem treeIndex={this.props.treeIndex} itemNum={`${index}_2`} item={treeLine.item2} treeName={this.props.treeList.tree_name} currentLevel={this.props.currentTreeLevel} currentItemLevel={currentValueList[index * 4 + 2]} handleClick={this.handleClick}></TalentItem>
                    </div>
                    <div className="talentTree_container_line_item">
                        <TalentItem treeIndex={this.props.treeIndex} itemNum={`${index}_3`} item={treeLine.item3} treeName={this.props.treeList.tree_name} currentLevel={this.props.currentTreeLevel} currentItemLevel={currentValueList[index * 4 + 3]} handleClick={this.handleClick}></TalentItem>
                    </div>
                </div>
            )
        });

        return (
            <div className="talentTree_container_body">
                <div className="talentTree_container_header">
                    <div className="talentTree_container_header_left"></div>
                    <div className="talentTree_container_header_content"></div>
                    <div className="talentTree_container_header_right"></div>
                </div>
                <div className="talentTree_container_content">
                    <div className="talentTree_container_content_left"></div>
                    <div className="talentTree_container_content_tree" style={this.props.treeList.tree_bg}>
                        {treeLineList}
                    </div>
                    <div className="talentTree_container_content_right"></div>
                </div>
                <div className="talentTree_container_footer">
                    <div className="talentTree_container_footer_left"></div>
                    <div className="talentTree_container_footer_content">
                        <div className="talentTree_container_footer_content_left">
                            <div className="talentTree_container_footer_content_icon">
                                <img src={this.props.treeList.tree_icon} alt="" />
                            </div>
                            <div className="talentTree_container_footer_content_name">{this.props.treeList.tree_name}</div>
                            <div className="talentTree_container_footer_content_point">: {this.props.currentTreeLevel}点</div>
                        </div>
                        <div className="talentTree_container_footer_content_right">
                            <a className="talentTree_container_footer_button" onClick={this.resetTree}>
                                <img src={require('../../source/img/reset.gif')} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="talentTree_container_footer_right"></div>
                </div>
            </div>
        )
    }
}

export default TalentContainer;
