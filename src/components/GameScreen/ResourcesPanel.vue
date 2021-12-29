<template>
      <v-app-bar height="40" flat app dark>
          <v-row>
              <template v-for="(res, key, index) in resources">
                  <v-col
                    v-if="res.visible"
                    :key="index"
                    class="text-caption"
                  >
                      <v-icon>{{ res.icon }}</v-icon>
                      {{ res.count }}
                  </v-col>
              </template>
          </v-row>
          <v-spacer/>
          <v-btn x-small @click="setLang('ru')" text>rus</v-btn>
          <v-btn x-small @click="setLang('en')" text>eng</v-btn>
      </v-app-bar>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'GameScreen',

        computed: {
            ...mapState({
                resources: (state) => state.resources,
            }),
        },

        methods: {
            setLang(locale) {
                this.$i18n.locale = locale
            },
        },
    }
</script>
