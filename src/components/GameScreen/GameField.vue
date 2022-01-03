<template>
    <v-row>
        <v-col cols="auto">
            <v-card class="pa-3">
                <v-list-item-group>
                    <v-row
                        v-for="x in field.width"
                        dense
                        no-gutters
                        :key="x"
                    >
                        <v-col
                            v-for="y in field.height"
                            cols="auto"
                            :key="y"
                            @click="selectCell(field.cells[x-1][y-1])"
                        >
                            <v-list-item
                                class="pa-0"
                                :class="isSelected(field.cells[x-1][y-1])"
                            >
                                <v-img
                                    :src="icons[field.cells[x-1][y-1].type]"
                                >
                                    <v-img
                                        v-if="field.cells[x-1][y-1] === currentCell"
                                        :src="icons.border"
                                    >
                                        <v-img
                                            v-if="field.cells[x-1][y-1].object"
                                            :src="icons[field.cells[x-1][y-1].object.type]"
                                        />
                                    </v-img>
                                    <template v-else> 
                                        <v-img
                                            v-if="field.cells[x-1][y-1].object"
                                            :src="icons[field.cells[x-1][y-1].object.type]"
                                        />
                                    </template>
                                </v-img>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-list-item-group>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'GameField',

        computed: {
            ...mapState({
                field: (state) => state.field,
                icons: (state) => state.icons,
                currentCell: (state) => state.currentCell,
            }),
        },

        methods: {
            isSelected(cell) {
                return cell === this.currentCell ? 'selected' : 'unselected'
            },

            selectCell(cell) {
                this.$store.commit('selectCell', cell)
            },
        },
    }
</script>

<style scoped>
    .selected {
        border: 0px solid black;
    }
    .unselected {
        border: 0px solid white;
    }
</style>
