<template>
    <p>{{ $t('hello') }}</p>
</template>

<script>
    export default {
        name: 'Menu',
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
