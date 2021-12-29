const mutations = {
    setRes(state, { name, count = 0, max, visible}) {

        if (max !== undefined && max !== null) {
            state.resources[name].max = max
        }

        state.resources[name].count = Math.min(count, state.resources[name].max)

        if (visible !== undefined && visible !== null) {
            state.resources[name].visible = visible
        }
    },

    setVar(state, { name, value }) {
        state[name] = value
    },
}

export default mutations