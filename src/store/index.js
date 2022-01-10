import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

import objects from './state/Objects'

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

            appletree: require('@/assets/objects/appletree.gif'),
            bear: require('@/assets/objects/bear.gif'),
            bigtree: require('@/assets/objects/bigtree.gif'),
            bizon: require('@/assets/objects/bizon.gif'),
            blackWolf: require('@/assets/objects/black_wolf.gif'),
            grass: require('@/assets/objects/grass.gif'),
            mushrooms: require('@/assets/objects/mushrooms.gif'),
            stoneBrovn: require('@/assets/objects/stone_brovn.gif'),
            stoneGray: require('@/assets/objects/stone_gray.gif'),
            tree: require('@/assets/objects/tree.gif'),
            wolf: require('@/assets/objects/wolf.gif'),
        },        
        isGameCreated: false,
        isGameReady: false,
        objects,
        resources: {
            brain: {
                count: 0,
                icon: 'mdi-brain',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            people: {
                count: 0,
                icon: 'mdi-human-handsdown',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            health: {
                count: 0,
                icon: 'mdi-heart',
                max: 100,
                visible: true,
            },
            food: {
                count: 0,
                icon: 'mdi-food-drumstick',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            bone: { 
                count: 0,
                icon: 'mdi-bone',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            paw: {
                count: 0,
                icon: 'mdi-paw',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            grass: {
                count: 0,
                icon: 'mdi-grass',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            wood: {
                count: 0,
                icon: 'mdi-pine-tree',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            stone: {
                count: 0,
                max: Number.MAX_SAFE_INTEGER,
                icon: 'mdi-wall',
                visible: true,
            },
            ore: {
                count: 0,
                icon: 'mdi-anvil',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            gold: {
                count: 0,
                icon: 'mdi-gold',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            mana: {
                count: 0,
                icon: 'mdi-flask-round-bottom',
                max: Number.MAX_SAFE_INTEGER,
                visible: true,
            },
            artefact: {
                count: 0,
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
