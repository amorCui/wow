let talentList = [{
        name_zh: '战士',
        name_en: 'Warrior',
        search: 'warrior,zs,战士',
        summary: '只要战火还在燃烧，各个种族的英雄就不会停止对战斗技巧的追求。战士将力量、领导才能和对武器盔甲的了解结合在一起，在光荣的战斗中一展身手。',
        divStyle: {
            backgroundColor: "#c69b6d"
        },
        logo: require('../source/img/zs.svg')
    },
    {
        name_zh: '圣骑士',
        name_en: 'Paladin',
        search: 'paladin,74,骑士',
        summary: '圣骑士的天职：匡扶弱小，伸张正义，消灭来自世界最黑暗角落的邪恶力量。这些神圣的战士们身着板甲，以对抗最强大的敌人。圣光的祝福让他们能够治愈伤口，在某些情况下，甚至可以使死者复生。',
        divStyle: {
            backgroundColor: "#F48CBA"
        },
        logo: require('../source/img/74.svg')
    },
    {
        name_zh: '猎人',
        name_en: 'Hunter',
        search: 'hunter,lr,猎人',
        summary: '自远古以来，荒野的召唤就会让一些冒险者离开舒适的家，到无情的原始世界冒险。那些坚持下来的人就成为了猎人。他们对自然环境无比熟悉，可以像幽灵一样隐藏在树木之中，在敌人的必经之路上布下陷阱。',
        divStyle: {
            backgroundColor: "#AAD372"
        },
        logo: require('../source/img/lr.svg')
    },
    {
        name_zh: '萨满',
        name_en: 'Shaman',
        search: 'shaman,sm,萨满',
        summary: '萨满祭司是灵魂的指引者，他们侍奉的不是神灵，而是每一种元素。作为大地、火焰、流水与空气之间的调解者，萨满祭司会召唤图腾，指引元素援助他们的盟友，或是惩罚那些给他们带来威胁的人。',
        divStyle: {
            backgroundColor: "#2359FF"
        },
        logo: require('../source/img/sm.svg')
    },
    {
        name_zh: '德鲁伊',
        name_en: 'Druid',
        search: 'druid,xd,德鲁伊',
        summary: '德鲁伊能驾驭强大的自然力量来维护平衡、保护生命。经验丰富的德鲁伊可以向敌人倾泄自然的原始能量，从远处召唤星界的愤怒砸向他们，用强化过的藤蔓束缚他们，或是将他们困在不息的旋风之中。',
        divStyle: {
            backgroundColor: "#FF7C0A"
        },
        logo: require('../source/img/xd.svg')
    },
    {
        name_zh: '盗贼',
        name_en: 'Rogue',
        search: 'rogue,dz,盗贼',
        summary: '潜行者的信条就是契约，而荣誉则可以用金钱来交易。这些雇佣兵们不会被良知束缚，习惯依赖于残忍而高效的战术。',
        divStyle: {
            backgroundColor: "#FFF468"
        },
        logo: require('../source/img/dz.svg')
    },
    {
        name_zh: '法师',
        name_en: 'Mage',
        search: 'mage,fs,法师',
        summary: '只有最敏锐、聪慧、严于律己的学生才能够走上法师之路。法师所能够掌握的奥术魔法太过强大而危险，只有最专注的研习者才能够窥见其中的奥秘。',
        divStyle: {
            backgroundColor: "#68CCEF"
        },
        logo: require('../source/img/fs.svg')
    },
    {
        name_zh: '术士',
        name_en: 'Warlock',
        search: 'warlock,ss,术士',
        summary: '面对恶魔的力量时，大多数英雄只看到了死亡。但术士看到的却只有机遇。他们的目标是支配这样的力量，并且在黑暗魔法中找到了手段。这些贪婪的施法者召唤恶魔仆从与他们并肩作战。',
        divStyle: {
            backgroundColor: "#9382C9"
        },
        logo: require('../source/img/ss.svg')
    },
    {
        name_zh: '牧师',
        name_en: 'Priest',
        search: 'priest,ms,牧师',
        summary: '牧师致力于升华他们的精神，通过造福大众来表达他们坚定不移的信念。 在过去的千百年中，每当大地遭受战火、盟友需要他们支援的时候，他们都会抛开舒适的生活，离开与世隔绝的神殿。',
        divStyle: {
            backgroundColor: "#F0EBE0"
        },
        logo: require('../source/img/ms.svg')
    }
];

let talentMap = {
    'Warrior': {
        name_zh: '战士',
        name_en: 'Warrior',
        summary: '只要战火还在燃烧，各个种族的英雄就不会停止对战斗技巧的追求。战士将力量、领导才能和对武器盔甲的了解结合在一起，在光荣的战斗中一展身手。',
        Duties: '坦克，伤害输出',
        divStyle: {
            backgroundColor: "#c69b6d"
        },
        logo: require('../source/img/zs.svg')
    },
    'Paladin': {
        name_zh: '圣骑士',
        name_en: 'Paladin',
        summary: '圣骑士的天职：匡扶弱小，伸张正义，消灭来自世界最黑暗角落的邪恶力量。这些神圣的战士们身着板甲，以对抗最强大的敌人。圣光的祝福让他们能够治愈伤口，在某些情况下，甚至可以使死者复生。',
        Duties: '坦克，治疗，伤害输出',
        divStyle: {
            backgroundColor: "#F48CBA"
        },
        logo: require('../source/img/74.svg')
    },
    'Hunter': {
        name_zh: '猎人',
        name_en: 'Hunter',
        summary: '自远古以来，荒野的召唤就会让一些冒险者离开舒适的家，到无情的原始世界冒险。那些坚持下来的人就成为了猎人。他们对自然环境无比熟悉，可以像幽灵一样隐藏在树木之中，在敌人的必经之路上布下陷阱。',
        Duties: '伤害输出',
        divStyle: {
            backgroundColor: "#AAD372"
        },
        logo: require('../source/img/lr.svg')
    },
    'Shaman': {
        name_zh: '萨满',
        name_en: 'Shaman',
        summary: '萨满祭司是灵魂的指引者，他们侍奉的不是神灵，而是每一种元素。作为大地、火焰、流水与空气之间的调解者，萨满祭司会召唤图腾，指引元素援助他们的盟友，或是惩罚那些给他们带来威胁的人。',
        Duties: '治疗，伤害输出',
        divStyle: {
            backgroundColor: "#2359FF"
        },
        logo: require('../source/img/sm.svg')
    },
    'Druid': {
        name_zh: '德鲁伊',
        name_en: 'Druid',
        summary: '德鲁伊能驾驭强大的自然力量来维护平衡、保护生命。经验丰富的德鲁伊可以向敌人倾泄自然的原始能量，从远处召唤星界的愤怒砸向他们，用强化过的藤蔓束缚他们，或是将他们困在不息的旋风之中。',
        Duties: '坦克，治疗，伤害输出',
        divStyle: {
            backgroundColor: "#FF7C0A"
        },
        logo: require('../source/img/xd.svg')
    },
    'Rogue': {
        name_zh: '盗贼',
        name_en: 'Rogue',
        summary: '潜行者的信条就是契约，而荣誉则可以用金钱来交易。这些雇佣兵们不会被良知束缚，习惯依赖于残忍而高效的战术。',
        Duties: '伤害输出',
        divStyle: {
            backgroundColor: "#FFF468"
        },
        logo: require('../source/img/dz.svg')
    },
    'Mage': {
        name_zh: '法师',
        name_en: 'Mage',
        summary: '只有最敏锐、聪慧、严于律己的学生才能够走上法师之路。法师所能够掌握的奥术魔法太过强大而危险，只有最专注的研习者才能够窥见其中的奥秘。',
        Duties: '伤害输出',
        divStyle: {
            backgroundColor: "#68CCEF"
        },
        logo: require('../source/img/fs.svg')
    },
    'Warlock': {
        name_zh: '术士',
        name_en: 'Warlock',
        summary: '面对恶魔的力量时，大多数英雄只看到了死亡。但术士看到的却只有机遇。他们的目标是支配这样的力量，并且在黑暗魔法中找到了手段。这些贪婪的施法者召唤恶魔仆从与他们并肩作战。',
        Duties: '伤害输出',
        divStyle: {
            backgroundColor: "#9382C9"
        },
        logo: require('../source/img/ss.svg')
    },
    'Priest': {
        name_zh: '牧师',
        name_en: 'Priest',
        summary: '牧师致力于升华他们的精神，通过造福大众来表达他们坚定不移的信念。 在过去的千百年中，每当大地遭受战火、盟友需要他们支援的时候，他们都会抛开舒适的生活，离开与世隔绝的神殿。',
        Duties: '治疗，伤害输出',
        divStyle: {
            backgroundColor: "#F0EBE0"
        },
        logo: require('../source/img/ms.svg')
    }
};

let talentTree = {
    'Warrior': {
        name: '战士',
        tree_0: {
            tree_name: '武器',
            tree_icon: require('../source/img/warrior0.png'),
            tree_bg: {
                backgroundImage: `url(${require("../source/img/warrior_0_bg.jpg") })`
            },
            tree: {
                tree_line: [
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/improvedheroicstrike.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/improvedheroicstrike-off.jpg"),
                            item_name: '强化英勇打击',
                            max_level: 3,
                            description: '使你的英勇打击技能所消耗的怒气值减少1点。',
                            require_item: 0,
                        },
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree_name: '狂怒',
            tree_icon: require('../source/img/warrior1.png'),
            tree_bg: {
                backgroundImage: `url(${require("../source/img/warrior_1_bg.jpg") })`
            },
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/boomingvoice.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/boomingvoice-off.jpg"),
                            item_name: '震耳噪音',
                            max_level: 5,
                            description: '使你的战斗怒吼和挫志怒吼效果的作用范围和持续时间提高10%。',
                            require_item: 0,
                        },
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree_name: '防御',
            tree_icon: require('../source/img/warrior2.png'),
            tree_bg: {
                backgroundImage: `url(${require("../source/img/warrior_2_bg.jpg") })`
            },
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/shieldspecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/shieldspecialization-off.jpg"),
                            item_name: '盾牌专精',
                            max_level: 5,
                            description: '使你用盾牌格挡攻击的几率提高1%，在成功格挡后有20%的几率得到1点怒气。',
                            require_item: 0,
                        },
                        item2:null,
                        item3:null
                    }
            
                ]
            }
        }
    },
    'Paladin': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    },
    'Hunter': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    },
    'Shaman': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    },
    'Druid': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    },
    'Rogue': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    },
    'Mage': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    },
    'Warlock': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    },
    'Priest': {
        tree_0: {

        },
        tree_1: {

        },
        tree_2: {

        }
    }
};

export {
    talentList,
    talentMap,
    talentTree
};