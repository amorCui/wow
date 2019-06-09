import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import styles from "./TalentList.css";

export default class TalentList extends Component {
    constructor(props) {
        super(props);
        const talentList = [
            {
                name_zh:'战士',
                name_en:'Warrior',
                search:'warrior,zs,战士',
                divStyle : {
                    backgroundColor:"#c69b6d"
                },
                logo:require('../../source/img/zs.svg')
            },
            {
                name_zh:'圣骑士',
                name_en:'Paladin',
                search:'paladin,74,骑士',
                divStyle : {
                    backgroundColor:"#F48CBA"
                },
                logo:require('../../source/img/74.svg')
            },
            {
                name_zh:'猎人',
                name_en:'Hunter',
                search:'hunter,lr,猎人',
                divStyle : {
                    backgroundColor:"#AAD372"
                },
                logo:require('../../source/img/lr.svg')
            },
            {
                name_zh:'萨满',
                name_en:'Shaman',
                search:'shaman,sm,萨满',
                divStyle : {
                    backgroundColor:"#2359FF"
                },
                logo:require('../../source/img/sm.svg')
            },
            {
                name_zh:'德鲁伊',
                name_en:'Druid',
                search:'druid,xd,德鲁伊',
                divStyle : {
                    backgroundColor:"#FF7C0A"
                },
                logo:require('../../source/img/xd.svg')
            },
            {
                name_zh:'盗贼',
                name_en:'Rogue',
                search:'rogue,dz,盗贼',
                divStyle : {
                    backgroundColor:"#FFF468"
                },
                logo:require('../../source/img/dz.svg')
            },
            {
                name_zh:'法师',
                name_en:'Mage',
                search:'mage,fs,法师',
                divStyle : {
                    backgroundColor:"#68CCEF"
                },
                logo:require('../../source/img/fs.svg')
            },
            {
                name_zh:'术士',
                name_en:'Warlock',
                search:'warlock,ss,术士',
                divStyle : {
                    backgroundColor:"#9382C9"
                },
                logo:require('../../source/img/ss.svg')
            },
            {
                name_zh:'牧师',
                name_en:'Priest',
                search:'priest,ms,牧师',
                divStyle : {
                    backgroundColor:"#F0EBE0"
                },
                logo:require('../../source/img/ms.svg')
            }
            // {
            //     name:'Death Knight',
            //     search:'death knight,dk,死亡骑士,死骑',
            //     divStyle : {
            //         backgroundColor:"#ff0000"
            //     },
            //     logo:require('../../source/img/dk.svg')
            // }
        ];

        this.state = {
            talentList:talentList
        }
    }


    render() {
        const listItems = this.state.talentList.map((talent,index) =>
            <Link to={"/Detail/" + talent.name_en} className="talent_link" key={index} >
            {/* <a href={"/Detail/" + talent.name_en} className="talent_link" key={index}> */}
                <li key ={index} className="talent">
                    <div  style={talent.divStyle} className="talent_item">
                        <div className="talent_name">
                            <div className="talent_name_en">
                                {talent.name_en}           
                            </div>
                            <div className="talent_name_zh">
                                {talent.name_zh}           
                            </div>
                        </div>
                    
                        <div className="talent_logo">
                            <img src={talent.logo} alt="" />
                        
                        </div>
                    </div>
                </li>
            {/* </a> */}
            </Link>
        );

        return (
            <div>
                <ul className="talentList">
                    {listItems}
                </ul>
            </div>
        )
    }
}

