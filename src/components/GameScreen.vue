<template>
    <div>
        <ResourcesPanel />
        <GameField />
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import GameField from '@/components/GameScreen/GameField'
    import ResourcesPanel from '@/components/GameScreen/ResourcesPanel'

    export default {
        name: 'GameScreen',

        components: {
            GameField,
            ResourcesPanel,
        },

        computed: {
            ...mapState({
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
