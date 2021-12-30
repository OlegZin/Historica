<template>
    <div>
        <pre>{{field}}</pre>
    </div>
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
