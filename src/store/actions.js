const actions = {
    newGame({ commit }, { age, stage }) {
        commit('setVar', { name: 'isGameCreated', value: true})
        commit('setVar', { name: 'gameStage', value: stage})

        // set resources
        commit('setRes', { name: 'brain', count: 0, visible: false })
        commit('setRes', { name: 'people', count: 0, visible: false })
        commit('setRes', { name: 'food', count: 0, visible: false })
        commit('setRes', { name: 'bone', count: 0, visible: false })
        commit('setRes', { name: 'paw', count: 0, visible: false })
        commit('setRes', { name: 'grass', count: 0, visible: false })
        commit('setRes', { name: 'wood', count: 0, visible: false })
        commit('setRes', { name: 'stone', count: 0, visible: false })
        commit('setRes', { name: 'ore', count: 0, visible: false })
        commit('setRes', { name: 'gold', count: 0, visible: false })
        commit('setRes', { name: 'mana', count: 0, visible: false })
        commit('setRes', { name: 'artefact', count: 0, visible: false })

        switch (age) {
            case 'stone_age':
                commit('setRes', { name: 'brain', count: 0, visible: false })
                commit('setRes', { name: 'people', count: 1, visible: true })
                commit('setRes', { name: 'health', count: 43, visible: true })
                commit('setRes', { name: 'food', count: 8, visible: true })
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
                        let object = null
                        const params = (x, y, type, object) => {
                            return {x, y, type, object}
                        }

                        commit('initField', { height, width })

                        for (let x = 0; x <= width - 1; x++) {
                            switch (x) {
                                case 0:
                                    object = { type: 'bear', count: 100 }
                                    break
                                default:
                                    object = null
                            }

                            for (let y = 0; y <= height - 1; y++) {

                                commit('setFieldCell', params(x, y, type, object))
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

    objectAction(/*commit, object*/) {
        //commit.state.currLocation = object.location // select location effect to
        //const script = commit.state.Actions[object.type].action[object.level-1].action // get action
        //eval(script) // exec action
    },    
}

export default actions