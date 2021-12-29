const actions = {
    newGame({ commit }, age) {
        commit('setGameCreated', true)

        switch (age) {
            case 'stone_age':
                commit('setRes', { name: 'people', count: 1, visible: true })
                commit('setRes', { name: 'food', count: 100, visible: true })
                commit('setRes', { name: 'wood', count: 0, visible: true })
                commit('setRes', { name: 'stone', count: 0, visible: true })
                commit('setRes', { name: 'ore', count: 0 })
                commit('setRes', { name: 'gold', count: 0 })
                commit('setRes', { name: 'mana', count: 0 })
                commit('setRes', { name: 'artefact', count: 0 })
        }

        commit('setGameCreated', false)
        commit('setGameReady', true)
    },
}

export default actions