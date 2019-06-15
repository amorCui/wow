import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

//css
import './TalentTree.css';
//img



class TalentTree extends Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        const background_0 = {
            backgroundImage:`url(${require("../../source/img/warrior_0_bg.jpg") })`
        }
        const background_1 = {
            backgroundImage:`url(${require("../../source/img/warrior_1_bg.jpg") })`
        }
        const background_2 = {
            backgroundImage:`url(${require("../../source/img/warrior_2_bg.jpg") })`
        }

        return (
            <div className="talentTree">
                <div className="talentTree_header">
                    <div className="talentTree_header_profession">
                        <div>战士</div>
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
                            <img src={require('../../source/img/resetall.gif')} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="talentTree_container">
                    <div className="talentTree_container_body container_body_left">
                        <div className="talentTree_container_header">
                            <div className="talentTree_container_header_left"></div>
                            <div className="talentTree_container_header_content"></div>
                            <div className="talentTree_container_header_right"></div>
                        </div>
                        <div className="talentTree_container_content">
                            <div className="talentTree_container_content_left"></div>
                            <div className="talentTree_container_content_content" style={background_0}></div>
                            <div className="talentTree_container_content_right"></div>
                        </div>
                        <div className="talentTree_container_footer">
                            <div className="talentTree_container_footer_left"></div>
                            <div className="talentTree_container_footer_content">
                                <div className="talentTree_container_footer_content_left">
                                    <div className="talentTree_container_footer_content_icon">
                                        <img src={require('../../source/img/warrior0.png')} alt=""/>
                                    </div>
                                    <div className="talentTree_container_footer_content_name">武器</div>
                                    <div className="talentTree_container_footer_content_point">:10点</div>
                                </div>
                                <div className="talentTree_container_footer_content_right">
                                    <a>
                                        <img src={require('../../source/img/reset.gif')} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="talentTree_container_footer_right"></div>
                        </div>
                    </div>
                    <div className="talentTree_container_body container_body_center">
                        <div className="talentTree_container_header">
                            <div className="talentTree_container_header_left"></div>
                            <div className="talentTree_container_header_content"></div>
                            <div className="talentTree_container_header_right"></div>
                        </div>
                        <div className="talentTree_container_content">
                            <div className="talentTree_container_content_left"></div>
                            <div className="talentTree_container_content_content" style={background_1}></div>
                            <div className="talentTree_container_content_right"></div>
                        </div>
                        <div className="talentTree_container_footer">
                            <div className="talentTree_container_footer_left"></div>
                            <div className="talentTree_container_footer_content">
                                <div className="talentTree_container_footer_content_left">
                                    <div className="talentTree_container_footer_content_icon">
                                        <img src={require('../../source/img/warrior0.png')} alt=""/>
                                    </div>
                                    <div className="talentTree_container_footer_content_name">武器</div>
                                    <div className="talentTree_container_footer_content_point">:10点</div>
                                </div>
                                <div className="talentTree_container_footer_content_right">
                                    <a>
                                        <img src={require('../../source/img/reset.gif')} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="talentTree_container_footer_right"></div>
                        </div>
                    </div>
                    <div className="talentTree_container_body container_body_right">
                        <div className="talentTree_container_header">
                            <div className="talentTree_container_header_left"></div>
                            <div className="talentTree_container_header_content"></div>
                            <div className="talentTree_container_header_right"></div>
                        </div>
                        <div className="talentTree_container_content">
                            <div className="talentTree_container_content_left"></div>
                            <div className="talentTree_container_content_content" style={background_2}></div>
                            <div className="talentTree_container_content_right"></div>
                        </div>
                        <div className="talentTree_container_footer">
                            <div className="talentTree_container_footer_left"></div>
                            <div className="talentTree_container_footer_content">
                                <div className="talentTree_container_footer_content_left">
                                    <div className="talentTree_container_footer_content_icon">
                                        <img src={require('../../source/img/warrior0.png')} alt=""/>
                                    </div>
                                    <div className="talentTree_container_footer_content_name">武器</div>
                                    <div className="talentTree_container_footer_content_point">:10点</div>
                                </div>
                                <div className="talentTree_container_footer_content_right">
                                    <a>
                                        <img src={require('../../source/img/reset.gif')} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="talentTree_container_footer_right"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(TalentTree);