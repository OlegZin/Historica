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

    initField(state, { width, height }) {
        state.field.width = width
        state.field.height = height
        state.field.cells = Array.from(Array(width), () => new Array(height).fill({}))
    },

    setFieldCell(state, { x = 0, y = 0, fog, type, object }) {
        if ((state.field.width - 1 < x) || (state.field.height - 1 < y)) {
            return
        }
        
        if (fog) {
            state.field.cells[x][y].fog = fog
        }
        if (type) {
            state.field.cells[x][y].type = type
        }
        if (object) {
            state.field.cells[x][y].object = object
        }
        
    },

    setFieldCellObject(state, { x = 0, y = 0, name, value }) {
        if ((state.field.width - 1 < x) || (state.field.height - 1 < y) || !state.field[x][y].object) {
            return
        }

        state.field[x][y].object[name] = value ? value : state.field[x][y].object[name]
    },

    setVar(state, { name, value }) {
        state[name] = value
    },
}

export default mutations