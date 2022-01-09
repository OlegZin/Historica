<template>
    <div>
        <ResourcesPanel />
        <v-row>
            <v-col cols="auto">
                <GameField />
            </v-col>
            <v-col cols="auto">
                <ObjectPanel />
            </v-col>
        </v-row>
        <pre>{{currentCell}}</pre>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import GameField from '@/components/GameScreen/GameField'
    import ObjectPanel from '@/components/GameScreen/ObjectPanel'
    import ResourcesPanel from '@/components/GameScreen/ResourcesPanel'

    export default {
        name: 'GameScreen',

        components: {
            GameField,
            ObjectPanel,
            ResourcesPanel,
        },

        computed: {
            ...mapState({
                currentCell: (state) => state.currentCell,
                isGameReady: (state) => state.isGameReady,
                field: (state) => state.field,
            }),
        },

        mounted() {
            if (!this.isGameReady) {
                this.$router.push({ name: 'Menu'})
            }
        },
    }
</script>
