<template>
    <v-card>
        <v-row v-for="x in field.width" :key="x">
            <v-col v-for="y in field.height" :key="y">
                {{field.cells[x-1][y-1].type}}
            </v-col>
        </v-row>
    </v-card>
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
