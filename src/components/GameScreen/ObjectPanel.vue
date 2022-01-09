<template>
    <v-card class="pa-3">
        <v-row>
            <v-col>
                <v-img
                    v-if="currentCell && currentCell.object"
                    :src="icons[typeModel]"
                />
                <v-img
                    v-else
                    :src="icons[typeModel]"
                />
            </v-col>
            <v-col>
                sgrddgh
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
                icons: (state) => state.icons,
                currentCell: (state) => state.currentCell,
            }),

            typeModel() {
                return this.currentCell?.object?.type || this.currentCell?.type
            },
        },
    }
</script>