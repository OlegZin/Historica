import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isGameCreated: false,
        isGameReady: false,
        resources: {
            order: {
                count: 1000,
                icon: 'mdi-script-outline',
            },
            people: {
                count: 100,
                icon: 'mdi-human-handsdown',
            },
            gold: {
                count: 100,
                icon: 'mdi-gold',
            },
            wood: {
                count: 100,
                icon: 'mdi-pine-tree',
            },
            stone: {
                count: 100,
                icon: 'mdi-wall',
            },
            ore: {
                count: 100,
                icon: 'mdi-anvil',
            },
            food: {
                count: 100,
                icon: 'mdi-food-drumstick',
            },
            mana: {
                count: 100,
                icon: 'mdi-flask-round-bottom',
            },
            artefact: {
                count: 3,
                icon: 'mdi-deathly-hallows',
            },
        },
    },
    mutations,
    actions,
})
