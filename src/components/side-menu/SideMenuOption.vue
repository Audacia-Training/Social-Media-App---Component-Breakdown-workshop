<script lang="ts">
import { defineComponent } from 'vue';
import SideMenuOptionIcon from './SideMenuOptionIcon.vue';
import { SideMenuOption } from './../../models/side-menu-option.model';
import { PropType } from 'vue';

export default defineComponent({
  components: {
    SideMenuOptionIcon,
  },
  props: {
    option: { type: Object as PropType<SideMenuOption>, required: true },
  },
  data() {},
  created() {},
  mounted() {},
  computed: {},
  methods: {
  },
});
</script>

<template>
  <!-- Icon goes in here -->
  <SideMenuOptionIcon :iconLocation="option.icon" />
  <div class="side-menu__title">{{ option.name }}</div>
</template>

<style></style>
