import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ages: ['stone_age', 'myth_age', 'middle_age', 'steam_age', 'progressive_age', 'star_age'],
        currentCell: null,
        field: {
            height: 0,
            width: 0,
            cells: [],
            /*
            cell:
                {
                    fog: Number,
                    type: String,
                    object: {
                        count: Number,
                        type: String,
                        level: Number,
                    },
                }
            */
        },
        gameStage: null,
        icons: {
            border: require('@/assets/gui/border.png'),
            field: require('@/assets/grounds/field.png'),
            flowers: require('@/assets/objects/flowers.png'),
            grass: require('@/assets/objects/grass.png'),
            oak: require('@/assets/objects/oak.gif'),
            tree: require('@/assets/objects/tree.gif'),
        },        
        isGameCreated: false,
        isGameReady: false,
        resources: {
            people: {
                count: 100,
                icon: 'mdi-human-handsdown',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            health: {
                count: 43,
                icon: 'mdi-heart',
                max: 100,
                visible: true,
            },
            food: {
                count: 100,
                icon: 'mdi-food-drumstick',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            wood: {
                count: 100,
                icon: 'mdi-pine-tree',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            stone: {
                count: 100,
                max: Number.MAX_SAFE_INTEGER,
                icon: 'mdi-wall',
                visible: true,
            },
            ore: {
                count: 100,
                icon: 'mdi-anvil',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            gold: {
                count: 100,
                icon: 'mdi-gold',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            mana: {
                count: 100,
                icon: 'mdi-flask-round-bottom',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            artefact: {
                count: 3,
                icon: 'mdi-deathly-hallows',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
        },
        rules: {},
    },
    mutations,
    actions,
})
