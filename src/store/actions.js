const actions = {
    newGame({ commit, state }, age) {
        commit('setGameCreated', true)

        console.log('New game! ' + age)

        commit('setGameCreated', false)
        commit('setGameReady', true)
    },
}

export default actions