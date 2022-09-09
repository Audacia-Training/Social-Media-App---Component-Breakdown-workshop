<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    getAsset(nameOfAsset: string): URL {
      return new URL(this.assetsFolder + nameOfAsset, import.meta.url);
    },
  },
});
</script>

<template>
  <img class="side-menu__logo" :src="getAsset('twitter.svg')" alt="" />
</template>

<style></style>
