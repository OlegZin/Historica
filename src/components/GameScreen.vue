<template>
    <div>
        <ResourcesPanel />
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import ResourcesPanel from '@/components/GameScreen/ResourcesPanel'

    export default {
        name: 'GameScreen',

        components: {
            ResourcesPanel,
        },

        computed: {
            ...mapState({
                isGameReady: (state) => state.isGameReady,
            }),
        },

        mounted() {
            if (!this.isGameReady) {
                this.$router.push({ name: 'Menu'})
            }
        },
    }
</script>
