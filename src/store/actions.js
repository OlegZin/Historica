const actions = {
    newGame({ commit }, { age, stage }) {
        commit('setVar', { name: 'isGameCreated', value: true})
        commit('setVar', { name: 'gameStage', value: stage})

        // set resources
        switch (age) {
            case 'stone_age':
                commit('setRes', { name: 'people', count: 1, visible: true })
                commit('setRes', { name: 'food', count: 100, visible: true })
                commit('setRes', { name: 'wood', count: 0, visible: true })
                commit('setRes', { name: 'stone', count: 0, visible: true })
                commit('setRes', { name: 'ore', visible: false })
                commit('setRes', { name: 'gold', visible: false })
                commit('setRes', { name: 'mana', visible: false })
                commit('setRes', { name: 'artefact', visible: false })
        }

        // set gamefield

        commit('setVar', { name: 'isGameCreated', value: true})
        commit('setVar', { name: 'isGameReady', value: true})
    },
}

export default actions