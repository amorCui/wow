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
                            description: '使你的英勇打击技能所消耗的怒气值减少{$0}点。',
                            valueList:[
                                [1],
                                [2],
                                [3]
                            ],
                            require_item: 0,
                        },
                        item1:{
                            item_icon:require("../source/img/talents/warrior/warrior_0/deflection.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/deflection-off.jpg"),
                            item_name: '偏斜',
                            max_level: 5,
                            description: '使你的招架几率提高{$0}%。',
                            valueList:[
                                [1],
                                [2],
                                [3],
                                [4],
                                [5]
                            ],
                            require_item: 0,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/improvedrend.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/improvedrend-off.jpg"),
                            item_name: '强化撕裂',
                            max_level: 3,
                            description: '使你的撕裂技能的流血伤害效果每次生效时都提高{$0}%。',
                            valueList:[
                                [15],
                                [25],
                                [35]
                            ],
                            require_item: 0,
                        },
                        item3:null
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/improvedcharge.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/improvedcharge-off.jpg"),
                            item_name: '强化冲锋',
                            max_level: 2,
                            description: '使你的冲锋技能积攒的怒气值提高{$0}点。',
                            valueList:[
                                [3],
                                [6]
                            ],
                            require_item: 5,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/tacticalmastery.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/tacticalmastery-off.jpg"),
                            item_name: '战术掌握',
                            max_level: 5,
                            description: '在改变姿态的时候可以保留最多{$0}点怒气。',
                            valueList:[
                                [5],
                                [10],
                                [15],
                                [20],
                                [25]
                            ],
                            require_item: 5,
                        },
                        item2:null,
                        item3:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/improvedthunderclap.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/improvedthunderclap-off.jpg"),
                            item_name: '强化雷霆一击',
                            max_level: 3,
                            description: '使你的雷霆一击技能所消耗的怒气值减少{$0}点。',
                            valueList:[
                                [1],
                                [2],
                                [4]
                            ],
                            require_item: 5,
                        }
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/improvedoverpower.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/improvedoverpower-off.jpg"),
                            item_name: '强化压制',
                            max_level: 2,
                            description: '使你的压制技能造成的致命一击的几率提高{$0}%。',
                            valueList:[
                                [25],
                                [50]
                            ],
                            require_item:10,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/angermanagement.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/angermanagement-off.jpg"),
                            item_name: '愤怒掌控',
                            max_level: 1,
                            description: '当脱离战斗后，使你的怒气减少速度降低{$0}%。',
                            valueList:[
                                [30]
                            ],
                            require_item:10,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/deepwounds.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/deepwounds-off.jpg"),
                            item_name: '重伤',
                            max_level: 3,
                            description: '你的致命一击导致目标流血，使其在{$0}秒内遭受相当于你的武器平均伤害值的{$1}%的伤害。',
                            valueList:[
                                [12,20],
                                [12,40],
                                [12,60]
                            ],
                            require_item: 10,
                        },
                        item3:null
                    },
                    {
                        item0:null,
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/two-handedweaponspecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/two-handedweaponspecialization-off.jpg"),
                            item_name: '双手武器专精',
                            max_level: 5,
                            description: '使你的双手近战武器造成的伤害提高{$0}%。',
                            valueList:[
                                [1],
                                [2],
                                [3],
                                [4],
                                [5]
                            ],
                            require_item: 15,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/impale.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/impale-off.jpg"),
                            item_name: '穿刺',
                            max_level: 2,
                            description: '使你在战斗姿态、防御姿态、狂暴姿态下的各种技能的致命一击伤害加成提高{$0}%。',
                            valueList:[
                                [10],
                                [20]
                            ],
                            require_item: 15,
                        },
                        item3:null
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/axespecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/axespecialization-off.jpg"),
                            item_name: '强化冲锋',
                            max_level: 5,
                            description: '使你的斧类武器造成致命一击的几率提高{$0}%。',
                            valueList:[
                                [1],
                                [2],
                                [3],
                                [4],
                                [5]
                            ],
                            require_item: 20,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/sweepingstrikes.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/sweepingstrikes-off.jpg"),
                            item_name: '横扫攻击',
                            max_level: 1,
                            description: '技能，{$0}怒气，{$1}，{$2}秒冷却。你在接下来的{$3}次近战攻击中可以攻击到一个额外的敌人。',
                            valueList:[
                                [30,'瞬发',30,5]
                            ],
                            require_item: 20,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/macespecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/macespecialization-off.jpg"),
                            item_name: '锤类武器专精',
                            max_level: 5,
                            description: '使你的单手锤在击中目标时有{$0}%的机会将其击晕{$1}秒。',
                            valueList:[
                                [1,3],
                                [2,3],
                                [3,3],
                                [4,3],
                                [6,3]
                            ],
                            require_item: 20,
                        },
                        item3:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/swordspecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/swordspecialization-off.jpg"),
                            item_name: '剑类武器专精',
                            max_level: 5,
                            description: '使你在用剑类武器击中敌人后有{$0}%的几率进行一次额外的攻击。',
                            valueList:[
                                [1],
                                [2],
                                [3],
                                [4],
                                [5]
                            ],
                            require_item: 20,
                        }
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/polearmspecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/polearmspecialization-off.jpg"),
                            item_name: '长柄武器专精',
                            max_level: 5,
                            description: '使你的矛和长柄武器造成致命一击的几率提高{$0}%。',
                            valueList:[
                                [1],
                                [2],
                                [3],
                                [4],
                                [5]
                            ],
                            require_item: 25,
                        },
                        item1:null,
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/improvedhamstring.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/improvedhamstring-off.jpg"),
                            item_name: '强化断筋',
                            max_level: 3,
                            description: '使你的断筋技能有{$0}%的几率令目标无法移动，持续{$1}秒。',
                            valueList:[
                                [5,5],
                                [10,5],
                                [15,5]
                            ],
                            require_item: 25,
                        },
                        item3:null
                    },
                    {
                        item0:null,
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_0/mortalstrike.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_0/mortalstrike-off.jpg"),
                            item_name: '致死打击',
                            max_level: 1,
                            description: '技能，{$0}怒气，{$1}，{$2}秒冷却。<br>一次邪恶的攻击，对目标造成武器伤害外加{$3}点伤害，并使任何形式的治疗对其产生的效果降低{$4}%，持续{$5}秒。',
                            valueList:[
                                [30,'瞬发',6,85,50,10]
                            ],
                            require_item: 30,
                        },
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
                            description: '使你的战斗怒吼和挫志怒吼效果的作用范围和持续时间提高{$0}%。',
                            valueList:[
                                [10],
                                [20],
                                [30],
                                [40],
                                [50]
                            ],
                            require_item: 0,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/cruelty.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/cruelty-off.jpg"),
                            item_name: '残忍',
                            max_level: 5,
                            description: '使你用近战武器对敌人造成致命一击的几率提高{$0}%。',
                            valueList:[
                                [1],
                                [2],
                                [3],
                                [4],
                                [5]
                            ],
                            require_item: 0,
                        },
                        item3:null
                    },
                    {
                        item0:null,
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/improveddemoralizingshout.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/improveddemoralizingshout-off.jpg"),
                            item_name: '强化挫志怒吼',
                            max_level: 5,
                            description: '使你的挫志怒吼技能降低敌人攻击强度的效果提高{$0}%。',
                            valueList:[
                                [8],
                                [16],
                                [24],
                                [36],
                                [40]
                            ],
                            require_item: 5,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/unbridledwrath.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/unbridledwrath-off.jpg"),
                            item_name: '怒不可遏',
                            max_level: 5,
                            description: '使你有{$0}%的几率在对敌人造成近战伤害之后获得{$1}个额外的怒气点数。',
                            valueList:[
                                [8,1],
                                [16,1],
                                [24,1],
                                [36,1],
                                [40,1]
                            ],
                            require_item: 5,
                        },
                        item3:null
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/improvedcleave.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/improvedcleave-off.jpg"),
                            item_name: '强化顺劈斩',
                            max_level: 3,
                            description: '使你的顺劈斩技能附加的伤害提高{$0}%。',
                            valueList:[
                                [40],
                                [80],
                                [120]
                            ],
                            require_item: 10,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/piercinghowl.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/piercinghowl-off.jpg"),
                            item_name: '刺耳怒吼',
                            max_level: 1,
                            description: '技能，瞬发，{$0}怒气。<br/> 使战士附近的所有敌人震慑{$1}秒。',
                            valueList:[
                                [10,6]
                            ],
                            require_item: 10,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/bloodcraze.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/bloodcraze-off.jpg"),
                            item_name: '血之狂热',
                            max_level: 3,
                            description: '在受到致命一击之后的{$0}秒内恢复生命值总量的{$1}%。',
                            valueList:[
                                [6,1],
                                [6,2],
                                [6,3]
                            ],
                            require_item: 10,
                        },
                        item3:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/improvedbattleshout.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/improvedbattleshout-off.jpg"),
                            item_name: '强化战斗怒吼',
                            max_level: 5,
                            description: '使你的战斗怒吼提高攻击强度的效果增强{$0}%。',
                            valueList:[
                                [5],
                                [10],
                                [15],
                                [20],
                                [25]
                            ],
                            require_item: 10,
                        }
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/dualwieldspecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/dualwieldspecialization-off.jpg"),
                            item_name: '双武器专精',
                            max_level: 5,
                            description: '使你的副手武器所造成的伤害提高{$0}%。',
                            valueList:[
                                [5],
                                [10],
                                [15],
                                [20],
                                [25]
                            ],
                            require_item: 15,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/improvedexecute.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/improvedexecute-off.jpg"),
                            item_name: '强化斩杀',
                            max_level: 2,
                            description: '使你的斩杀技能的怒气值消耗减少{$0}点。',
                            valueList:[
                                [2],
                                [5]
                            ],
                            require_item: 15,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/enrage.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/enrage-off.jpg"),
                            item_name: '狂怒',
                            max_level: 5,
                            description: '使你在遭到敌人的致命一击之后所进行的{$0}次近战攻击都获得{$1}%的额外伤害加值，效果持续{$2}秒。',
                            valueList:[
                                [12,5,12],
                                [12,10,12],
                                [12,15,12],
                                [12,20,12],
                                [12,25,12]
                            ],
                            require_item: 15,
                        },
                        item3:null
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/improvedslam.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/improvedslam-off.jpg"),
                            item_name: '强化猛击',
                            max_level: 5,
                            description: '使你的猛击技能的施放时间减少{$0}秒。',
                            valueList:[
                                [0.1],
                                [0.2],
                                [0.3],
                                [0.4],
                                [0.5]
                            ],
                            require_item: 20,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/deathwish.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/deathwish-off.jpg"),
                            item_name: '死亡之愿',
                            max_level: 1,
                            description: '技能，{$0}，{$1}怒气，{$2}分钟冷却。<br/>激活之后，你的物理攻击伤害提高{$3}%，并免疫恐惧效果，但是对所有攻击的防御力都降低{$4}%。持续{$4}秒。',
                            valueList:[
                                ["瞬发",10,3,20,20,30]
                            ],
                            require_item: 20,
                        },
                        item2:null,
                        item3:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/improvedintercept.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/improvedintercept-off.jpg"),
                            item_name: '强化拦截',
                            max_level: 2,
                            description: '使你的拦截技能的冷却时间减少{$0}秒。',
                            valueList:[
                                [5],
                                [10]
                            ],
                            require_item: 20,
                        }
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/improvedberserkerrage.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/improvedberserkerrage-off.jpg"),
                            item_name: '强化拦强化狂暴之怒截',
                            max_level: 2,
                            description: '在使用狂暴之怒技能之后获得{$0}点怒气值。',
                            valueList:[
                                [5],
                                [10]
                            ],
                            require_item: 25,
                        },
                        item1:null,
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/flurry.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/flurry-off.jpg"),
                            item_name: '乱舞',
                            max_level: 5,
                            description: '当你的近战攻击打出致命一击之后，你的下{$0}次近战攻击速度将提高{$1}%。',
                            valueList:[
                                [3,10],
                                [3,15],
                                [3,20],
                                [3,25],
                                [3,30]
                            ],
                            require_item: 25,
                        },
                        item3:null
                    },
                    {
                        item0:null,
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_1/boomingvoice.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_1/boomingvoice-off.jpg"),
                            item_name: '嗜血',
                            max_level: 1,
                            description: '技能，{$0}，{$1}怒气，{$2}秒冷却。<br/>立即攻击目标，对其造成相当于你的攻击强度{$3}%的伤害。另外，你的下{$4}次成功的近战攻击每次都可令你恢复{$5}点生命。效果持续{$6}秒。',
                            valueList:[
                                ["瞬发",30,6,40,5,10,8]
                            ],
                            require_item: 30,
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
                            description: '使你用盾牌格挡攻击的几率提高{$0}%，在成功格挡后有{$1}%的几率得到1点怒气。',
                            valueList:[
                                [1,20],
                                [2,40],
                                [3,60],
                                [4,80],
                                [5,100]
                            ],
                            require_item: 0,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/anticipation.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/anticipation-off.jpg"),
                            item_name: '预知',
                            max_level: 5,
                            description: '使你的防御技能提高{$0}点。',
                            valueList:[
                                [2],
                                [4],
                                [6],
                                [8],
                                [10]
                            ],
                            require_item: 0,
                        },
                        item3:null
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improvedbloodrage.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improvedbloodrage-off.jpg"),
                            item_name: '强化血性狂暴',
                            max_level: 2,
                            description: '使你的血性狂暴技能所产生的怒气值提高{$0}点。',
                            valueList:[
                                [2],
                                [5]
                            ],
                            require_item: 5,
                        },
                        item1:null,
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/toughness.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/toughness-off.jpg"),
                            item_name: '坚韧',
                            max_level: 5,
                            description: '使你因装备而获得的护甲值提高{$0}%。',
                            valueList:[
                                [2],
                                [4],
                                [6],
                                [8],
                                [10]
                            ],
                            require_item: 5,
                        },
                        item3:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/ironwill.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/ironwill-off.jpg"),
                            item_name: '钢铁意志',
                            max_level: 5,
                            description: '使你抵抗昏迷和魅惑效果的几率提高{$0}%。',
                            valueList:[
                                [3],
                                [6],
                                [9],
                                [12],
                                [15]
                            ],
                            require_item: 5,
                        }
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/laststand.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/laststand-off.jpg"),
                            item_name: '破釜沉舟',
                            max_level: 1,
                            description: '技能，{$0}，{$1}分钟冷却。<br/>激活之后，使你暂时获得{$2}%的生命值，持续{$3}秒。在效果解除之后，这些生命值会被扣除。',
                            valueList:[
                                ["瞬发",10,30,20]
                            ],
                            require_item: 10,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improvedshieldblock.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improvedshieldblock-off.jpg"),
                            item_name: '强化盾牌格挡',
                            max_level: 3,
                            description: '使你的盾牌格挡技能可以额外格挡一次攻击，并使其有效时间延长{$0}秒。',
                            valueList:[
                                [0.5],
                                [1],
                                [2]
                            ],
                            require_item: 10,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improvedrevenge.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improvedrevenge-off.jpg"),
                            item_name: '强化复仇',
                            max_level: 3,
                            description: '使你的复仇技能有{$0}%的几率令目标昏迷{$1}秒。',
                            valueList:[
                                [15,3],
                                [30,3],
                                [45,3]
                            ],
                            require_item: 10,
                        },
                        item3:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/defiance.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/defiance-off.jpg"),
                            item_name: '挑衅',
                            max_level: 5,
                            description: '是你在防御姿态下由于攻击而造成的威胁值提高{$0}%。',
                            valueList:[
                                [3],
                                [6],
                                [9],
                                [12],
                                [15]
                            ],
                            require_item: 10,
                        }
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improvedsunderarmor.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improvedsunderarmor-off.jpg"),
                            item_name: '强化破甲攻击',
                            max_level: 3,
                            description: '减少破甲技能所消耗的怒气{$0}点。',
                            valueList:[
                                [1],
                                [2],
                                [3]
                            ],
                            require_item: 15,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improveddisarm.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improveddisarm-off.jpg"),
                            item_name: '强化缴械',
                            max_level: 3,
                            description: '使你的缴械技能的效果持续时间延长{$0}秒。',
                            valueList:[
                                [1],
                                [2],
                                [3]
                            ],
                            require_item: 15,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improvedtaunt.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improvedtaunt-off.jpg"),
                            item_name: '强化嘲讽',
                            max_level: 2,
                            description: '使你的嘲讽技能的冷却时间减少{$0}秒。',
                            valueList:[
                                [1],
                                [2]
                            ],
                            require_item: 15,
                        },
                        item3:null
                    },
                    {
                        item0:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improvedshieldwall.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improvedshieldwall-off.jpg"),
                            item_name: '强化盾墙',
                            max_level: 2,
                            description: '使你的盾墙技能的有效时间延长{$0}秒。',
                            valueList:[
                                [3],
                                [5]
                            ],
                            require_item: 20,
                        },
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/concussionblow.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/concussionblow-off.jpg"),
                            item_name: '震荡猛击',
                            max_level: 1,
                            description: '技能，{$0}，{$1}秒冷却。</br>野蛮的攻击，令目标昏迷{$2}秒。',
                            valueList:[
                                ["瞬发",45,5]
                            ],
                            require_item: 20,
                        },
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/improvedshieldbash.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/improvedshieldbash-off.jpg"),
                            item_name: '强化盾击',
                            max_level: 2,
                            description: '使你的盾击技能有{$0}%的几率使目标沉默{$1}秒。',
                            valueList:[
                                [50,3],
                                [100,3]
                            ],
                            require_item: 20,
                        },
                        item3:null
                    },
                    {
                        item0:null,
                        item1:null,
                        item2:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/one-handedweaponspecialization.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/one-handedweaponspecialization-off.jpg"),
                            item_name: '单手武器专精',
                            max_level: 5,
                            description: '使你的单手近战武器所能造成的伤害提高{$0}%。',
                            valueList:[
                                [2],
                                [4],
                                [6],
                                [8],
                                [10]
                            ],
                            require_item: 25,
                        },
                        item3:null
                    },
                    {
                        item0:null,
                        item1:{
                            item_icon: require("../source/img/talents/warrior/warrior_2/shieldslam.jpg"),
                            item_icon_off: require("../source/img/talents/warrior/warrior_2/shieldslam-off.jpg"),
                            item_name: '盾牌猛击',
                            max_level: 1,
                            description: '技能，{$0}，{$1}秒冷却。<br>用盾牌击打目标，对其造成{$2}到{$3}点伤害，并有{$4}%的几率驱散目标身上的{$5}个魔法效果，同时产生一定量的威胁值。',
                            valueList:[
                                ["瞬发",6,288,352,50,1]
                            ],
                            require_item: 30,
                        },
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Paladin': {
        name:'圣骑士',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Hunter': {
        name:'猎人',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Shaman': {
        name:'萨满',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Druid': {
        name:'德鲁伊',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Rogue': {
        name:'盗贼',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Mage': {
        name:'法师',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Warlock': {
        name:'术士',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    },
    'Priest': {
        name:'牧师',
        tree_0: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_1: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        },
        tree_2: {
            tree: {
                tree_line: [
                    {
                        item0:null,
                        item1:null,
                        item2:null,
                        item3:null
                    }
                ]
            }
        }
    }
};

export {
    talentList,
    talentMap,
    talentTree
};