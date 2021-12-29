<template>
    <p>{{ $t('hello') }}</p>
</template>

<script>
    export default {
        name: 'MenuScreen',
    }
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  },
  "ru": {
    "hello": "Здорово, ёпта!"
  }
}
</i18n>
