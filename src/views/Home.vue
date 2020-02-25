<template>
  <div class="home">
    <language class="float-right" lang="zh-TW" />
    {{ $t('hi') }}
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
import Language from '@/components/Language.vue';

export default {
  name: 'home',
  components: {
    Language,
  },
};
</script>
