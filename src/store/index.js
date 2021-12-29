import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ages: ['stone_age', 'myth_age', 'middle_age', 'steam_age', 'progressive_age', 'star_age'],
        isGameCreated: false,
        isGameReady: false,
        resources: {
            people: {
                count: 100,
                icon: 'mdi-human-handsdown',
                visible: true,
            },
            health: {
                count: 43,
                max: 100,
                icon: 'mdi-heart',
                visible: true,
            },
            food: {
                count: 100,
                icon: 'mdi-food-drumstick',
                visible: true,
            },
            wood: {
                count: 100,
                icon: 'mdi-pine-tree',
                visible: true,
            },
            stone: {
                count: 100,
                icon: 'mdi-wall',
                visible: true,
            },
            ore: {
                count: 100,
                icon: 'mdi-anvil',
                visible: true,
            },
            gold: {
                count: 100,
                icon: 'mdi-gold',
                visible: true,
            },
            mana: {
                count: 100,
                icon: 'mdi-flask-round-bottom',
                visible: true,
            },
            artefact: {
                count: 3,
                icon: 'mdi-deathly-hallows',
                visible: true,
            },
        },
    },
    mutations,
    actions,
})
