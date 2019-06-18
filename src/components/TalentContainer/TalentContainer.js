import React, { Component } from 'react';

//components
import TalentItem from '../TalentItem/TalentItem';

//css
import './TalentContainer.css';

class TalentContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let treeLineList = [];
    
        this.props.treeList.tree.tree_line.forEach((treeLine,index) => {
            treeLineList.push(
                <div key ={index} className="talentTree_container_line">

                    <div className="talentTree_container_line_item">
                        <TalentItem item={treeLine.item0} currentLevel={0}></TalentItem>
                    </div>
                    <div className="talentTree_container_line_item">
                        <TalentItem item={treeLine.item1} currentLevel={0}></TalentItem>
                    </div>
                    <div className="talentTree_container_line_item">
                        <TalentItem item={treeLine.item2} currentLevel={0}></TalentItem>
                    </div>
                    <div className="talentTree_container_line_item">
                        <TalentItem item={treeLine.item3} currentLevel={0}></TalentItem>
                    </div>
                </div>
            );
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
                            <div className="talentTree_container_footer_content_point">: 10点</div>
                        </div>
                        <div className="talentTree_container_footer_content_right">
                            <a className="talentTree_container_footer_button">
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
