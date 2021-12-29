<template>
    <v-container fill-height fluid class="pa-0">
        <v-row align="center" justify="center">
            <v-card width="500">
                <v-toolbar
                    color="light-blue"
                    dark
                >
                    <v-toolbar-title>{{ $t('historica') }}</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-list flat>
                        <v-list-item-group>

                            <v-list-group>
                                <template v-slot:activator>
                                    <v-list-item-icon>
                                        <v-icon>mdi-alert-decagram</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>
                                        {{ $t('new_game') }}
                                    </v-list-item-title>
                                </template>

                                <v-list-item>
                                    <v-card flat>
                                        <v-card-subtitle>{{ $t('stone_age') }}</v-card-subtitle>
                                    </v-card>
                                </v-list-item>

                                <v-list-item>
                                    <v-card flat>
                                        <v-card-subtitle>{{ $t('myth_age') }}</v-card-subtitle>
                                    </v-card>
                                </v-list-item>

                                <v-list-item>
                                    <v-card flat>
                                        <v-card-subtitle>{{ $t('middle_age') }}</v-card-subtitle>
                                    </v-card>
                                </v-list-item>

                                <v-list-item>
                                    <v-card flat>
                                        <v-card-subtitle>{{ $t('steam_age') }}</v-card-subtitle>
                                    </v-card>
                                </v-list-item>

                                <v-list-item>
                                    <v-card flat>
                                        <v-card-subtitle>{{ $t('progressive_age') }}</v-card-subtitle>
                                    </v-card>
                                </v-list-item>

                                <v-list-item>
                                    <v-card flat>
                                        <v-card-subtitle>{{ $t('star_age') }}</v-card-subtitle>
                                    </v-card>
                                </v-list-item>
                            </v-list-group>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-content-save-settings</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    {{ $t('continue') }}
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-earth</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title @click="changeLang">{{ $t('language') }}</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'MenuScreen',

        methods: {
            changeLang() {
                if (this.$i18n.locale === 'ru') {
                    this.$i18n.locale = 'en'
                } else if (this.$i18n.locale === 'en') {
                    this.$i18n.locale = 'ru'
                }
            },
        },
    }
</script>

<i18n>
{
  "en": {
    "historica": "Historica",
    "new_game": "New game",
    "continue": "Continue",
    "language": "Language",
    "stone_age": "Stone age",
    "myth_age": "Mythic age",
    "middle_age": "Middle age",
    "steam_age": "Steam age",
    "progressive_age": "Progressive age",
    "star_age": "Star age"
  },
  "ru": {
    "historica": "Историка",
    "new_game": "Новая игра",
    "continue": "Продолжить",
    "language": "Язык",
    "stone_age": "Каменный век",
    "myth_age": "Век мифов",
    "middle_age": "Средние века",
    "steam_age": "Паровой век",
    "progressive_age": "Прогрессивный век",
    "star_age": "Космический век"
  }
}
</i18n>
