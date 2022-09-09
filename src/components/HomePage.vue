<script setup lang="ts">
import { ref } from 'vue';
import { SideMenuOption } from '../models/side-menu-option.model';
import { Post } from '../models/post.model';
import { WhatsHappening } from '../models/whats-happening.model';

defineProps<{ msg: string }>();

const assetsFolder: string = './../assets/';

const sideMenuOptions: Ref<SideMenuOption[]> = ref([]);
sideMenuOptions.value = [
  new SideMenuOption('home-icon.svg', 'Home'),
  new SideMenuOption('hashtag-icon.svg', 'Explore'),
  new SideMenuOption('fa-bell', 'Notifications'),
  new SideMenuOption('fa-message', 'Messages'),
  new SideMenuOption('fa-bookmark', 'Bookmarks'),
  new SideMenuOption('fa-list-dropdown', 'Lists'),
  new SideMenuOption('fa-user', 'Profile'),
  new SideMenuOption('fa-ellipsis', 'More'),
];

const feed: Ref<Post[]> = ref([]);
feed.value = [
  new Post('The queen has died (sad face)'),
  new Post('Can wait for the weekend'),
  new Post('Dwayne "The Rock" Johnson'),
];

const thingsHappening: Ref<WhatsHappening[]> = ref([]);
thingsHappening.value = [
  new WhatsHappening(
    'Queen Elizabeth II, 1926-2022',
    'Queen Elizabeth II has died aged 96',
    125636
  ),
  new WhatsHappening('Entertainment - Trending Worldwide', '#Aliabhatt', 16943),
  new WhatsHappening(
    'Royal Mail',
    'Royal Mail due to go on strike again',
    13123
  ),
];

const count = ref(0);

function getAsset(nameOfAsset: string): URL {
  return new URL(nameOfAsset, import.meta.url);
}
</script>

<template>
  <div class="home-page">
    <div class="side-menu">
      <img
        class="side-menu__logo"
        src="https://audaciaazurestorage.blob.core.windows.net/social-media/twitter.png"
      />
      <div v-for="sideMenuOption in sideMenuOptions" class="side-menu__item">
        <img :src="getAsset(sideMenuOption.icon)" alt="" />
        {{ sideMenuOption.name }}
      </div>
    </div>
    <div class="feed">
      <div class="feed-create-post">Search the feed</div>
      <div class="feed-posts">
        <div class="post" v-for="post in feed">{{ post.content }}</div>
      </div>
    </div>
    <div class="misc">
      <div class="search">
        <img src="" alt="" />
      </div>
      <div class="trending">
        Whats Happening
        <div class="whats-happening" v-for="thing in thingsHappening">
          <div class="whats-happening__title">{{ thing.title }}</div>
          <div class="whats-happening__content">{{ thing.mainContent }}</div>
          <div class="whats-happening__trending-amount">
            {{ thing.amountOfPosts }}
          </div>
        </div>
      </div>
      <div class="who-to-follow"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  // justify-content: space-between;
  width: 100%;
  gap: 15px;
  padding: 10px;
  box-sizing: border-box;

  .side-menu {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .side-menu__logo {
      width: 40px;
      height: 40px;
    }

    .side-menu__item {
      display: flex;
      align-content: flex-start;
    }
  }

  .feed {
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    .feed-posts {
      display: flex;
      flex-direction: column;

      .post {
        display: flex;
        border: 1px;
        border-style: solid;
        border-color: grey;
        padding: 5px 25px;
      }
    }
  }

  .misc {
    .search {
    }

    .trending {
      .whats-happening {
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: 1px solid;
        border-color: none;

        &__title {
          color: grey;
          font-size: 12px;
        }

        &__content {
          display: flex;
          padding-left: 5px;
          align-content: flex-start;
        }

        &__trending-amount {
          color: grey;
          font-size: 12px;
        }
      }
    }

    .who-to-follow {
    }
  }
}
</style>
