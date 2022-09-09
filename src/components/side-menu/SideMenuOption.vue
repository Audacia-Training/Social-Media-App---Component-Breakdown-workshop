<script lang="ts">
import { defineComponent } from 'vue';
import SideMenuOptionIcon from './SideMenuOptionIcon.vue';

export default defineComponent({
  components: {
    SideMenuOptionIcon,
  },
  data() {},
  created() {},
  mounted() {},
  computed: {},
  methods: {
    testFunction(): void {
      console.log('Hellow OWrls');
    },
  },
});
</script>

<template>
  <!-- Icon goes in here -->
  <SideMenuOptionIcon />
  <div class="side-menu__title">{{ sideMenuOption.name }}</div>
</template>

<style></style>
