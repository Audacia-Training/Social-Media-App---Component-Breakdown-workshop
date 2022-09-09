<script lang="ts">
import { defineComponent } from 'vue';
import SideMenuOptionIcon from './SideMenuOptionIcon.vue';
import SideMenuOption from './SideMenuOption.vue';

export default defineComponent({
  components: {
    SideMenuOptionIcon,
    SideMenuOption,
  },
  data() {
    return {
      options: [],
    };
  },
});
</script>

<template>
  <div class="side-menu">
    <!-- Icon component goes here -->
    <SideMenuOptionIcon />
    <!-- option goes here - add v-for-->
    <SideMenuOption v-for="option in options" :key="option.name" />
  </div>
</template>

<style></style>
