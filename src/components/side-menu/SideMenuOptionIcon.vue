<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    iconLocation: { type: String, required: true },
  },
  data() {
    return {
      assetsFolder: './../../assets/',
    };
  },
  methods: {
    getAsset(nameOfAsset: string): URL {
      return new URL(this.assetsFolder + nameOfAsset, import.meta.url);
    },
  },
});
</script>

<template>
  <img class="logo" :src="getAsset(iconLocation)" alt="" />
</template>

<style scoped>
.logo {
  width: 25px;
  height: 25px;
  padding: 2px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(354deg)
    brightness(106%) contrast(102%);
}
</style>
