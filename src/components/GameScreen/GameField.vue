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
                        >
                            <v-list-item>
                                {{field.cells[x-1][y-1].type}}
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
            }),
        },

        methods: {
        },
    }
</script>
