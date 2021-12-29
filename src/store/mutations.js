const mutations = {
    setRes(state, { name, count = 0, visible}) {
        state.resources[name].count = count

        if (visible !== undefined && visible !== null) {
            state.resources[name].visible = visible
        }
    },

    setGameCreated(state, value) {
        state.isGameCreated = value
    },

    setGameReady(state, value) {
        state.isGameReady = value
    },
}

export default mutations