const actions = {
    newGame({ commit }, age) {
        commit('setGameCreated', true)

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

        commit('setGameCreated', false)
        commit('setGameReady', true)
    },
}

export default actions