<template>
    <div>
        <ResourcesPanel />
        <pre>{{field}}</pre>
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
