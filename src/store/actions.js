const actions = {
    newGame({ commit }, { age, stage }) {
        commit('setVar', { name: 'isGameCreated', value: true})
        commit('setVar', { name: 'gameStage', value: stage})

        // set resources
        commit('setRes', { name: 'people', count: 0, visible: false })
        commit('setRes', { name: 'food', count: 0, visible: false })
        commit('setRes', { name: 'wood', count: 0, visible: false })
        commit('setRes', { name: 'stone', count: 0, visible: false })
        commit('setRes', { name: 'ore', count: 0, visible: false })
        commit('setRes', { name: 'gold', count: 0, visible: false })
        commit('setRes', { name: 'mana', count: 0, visible: false })
        commit('setRes', { name: 'artefact', count: 0, visible: false })

        switch (age) {
            case 'stone_age':
                commit('setRes', { name: 'people', count: 1, visible: true })
                commit('setRes', { name: 'food', count: 100, visible: true })
                commit('setRes', { name: 'wood', count: 0, visible: true })
                commit('setRes', { name: 'stone', count: 0, visible: true })
                break
        }

        // set gamefield
        switch (age) {
            case 'stone_age':
                switch (stage) {
                    case 1: 
                        const height = 5
                        const width = 5
                        const type = 'field'
                        const object = { type: 'tree', count: 100 }

                        commit('initField', { height, width })

                        for (let x = 0; x <= width - 1; x++) {
                            for (let y = 0; y <= height - 1; y++) {
                                commit('setFieldCell', { x, y, type, object })
                            }
                        }
                        break
                }
                break
        }

        // finish initialization
        commit('setVar', { name: 'isGameCreated', value: true})
        commit('setVar', { name: 'isGameReady', value: true})
    },
}

export default actions