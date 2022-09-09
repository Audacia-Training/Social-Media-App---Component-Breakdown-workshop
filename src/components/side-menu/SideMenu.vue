<script lang="ts">
import { defineComponent } from 'vue';
import { SideMenuOption } from './../../models/side-menu-option.model';
import SideMenuOptionIcon from './SideMenuOptionIcon.vue';
import SideMenuOptionComponent from './SideMenuOption.vue';

export default defineComponent({
  components: {
    SideMenuOptionIcon,
    SideMenuOptionComponent,
  },
  data() {
    return {
      options: [
        new SideMenuOption('home-icon.svg', 'Home'),
        new SideMenuOption('hashtag-icon.svg', 'Explore'),
        new SideMenuOption('bell.svg', 'Notifications'),
        new SideMenuOption('message.svg', 'Messages'),
        new SideMenuOption('book-mark.svg', 'Bookmarks'),
        new SideMenuOption('list.svg', 'Lists'),
        new SideMenuOption('user.svg', 'Profile'),
        new SideMenuOption('ellipsis.svg', 'More'),
      ] as SideMenuOption[],
    };
  },
});
</script>

<template>
  <div class="side-menu">
    <!-- Icon component goes here -->
    <SideMenuOptionIcon :iconLocation="'twitter.svg'" />
    <!-- option goes here - add v-for-->
    <SideMenuOptionComponent
      v-for="option in options"
      :key="option.name"
      :option="option"
    />
  </div>
</template>

<style></style>
