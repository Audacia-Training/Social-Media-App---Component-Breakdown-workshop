<script lang="ts">
import { SideMenuOption } from '../models/side-menu-option.model';
import { Post } from '../models/post.model';
import { WhatsHappening } from '../models/whats-happening.model';

export default defineComponent({
  data() {
    return {
      assetsFolder: './../assets/',
      sideMenuOptions: [
        new SideMenuOption('home-icon.svg', 'Home'),
        new SideMenuOption('hashtag-icon.svg', 'Explore'),
        new SideMenuOption('bell.svg', 'Notifications'),
        new SideMenuOption('message.svg', 'Messages'),
        new SideMenuOption('book-mark.svg', 'Bookmarks'),
        new SideMenuOption('list.svg', 'Lists'),
        new SideMenuOption('user.svg', 'Profile'),
        new SideMenuOption('ellipsis.svg', 'More'),
      ] as SideMenuOption[],
      feed: [
        new Post('The queen has died (sad face)'),
        new Post('Can wait for the weekend'),
        new Post('Dwayne "The Rock" Johnson'),
      ] as Post[],
      thingsHappening: [
        new WhatsHappening(
          'Queen Elizabeth II, 1926-2022',
          'Queen Elizabeth II has died aged 96',
          125636
        ),
        new WhatsHappening(
          'Entertainment - Trending Worldwide',
          '#Aliabhatt',
          16943
        ),
        new WhatsHappening(
          'Royal Mail',
          'Royal Mail due to go on strike again',
          13123
        ),
      ] as WhatsHappening[],
    };
  },
  created() {},
  methods: {
    getAsset(nameOfAsset: string): URL {
      return new URL(assetsFolder + nameOfAsset, import.meta.url);
    },
  },
});
</script>

<template>
  <div class="home-page">
    <div class="side-menu">
      <img class="side-menu__logo" :src="getAsset('twitter.svg')" alt="" />
      <div v-for="sideMenuOption in sideMenuOptions" class="side-menu__item">
        <img
          class="side-menu__logo"
          :src="getAsset(sideMenuOption.icon)"
          alt=""
        />
        <div class="side-menu__title">{{ sideMenuOption.name }}</div>
      </div>
    </div>
    <div class="feed">
      <div class="feed-create-post">Create a new post</div>
      <div class="feed-posts">
        <div class="post" v-for="post in feed">{{ post.content }}</div>
      </div>
    </div>
    <div class="misc">
      <div class="search">
        <img class="search-icon" :src="getAsset('search.svg')" alt="" />
        Search for something
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
  width: 100%;
  gap: 15px;
  padding: 10px;
  box-sizing: border-box;

  .side-menu {
    display: flex;
    flex-direction: column;
    gap: 5px;
    // Something hover?

    &__logo {
      width: 25px;
      height: 25px;
      padding: 2px;
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(354deg)
        brightness(106%) contrast(102%);
    }

    &__item {
      display: flex;
      align-content: flex-start;
    }

    &__title {
      margin-left: 10px;
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
      display: flex;
      padding: 10px;
      gap: 5px;
      border: raduis;

      .search-icon {
        width: 25px;
        height: 25px;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(354deg)
          brightness(106%) contrast(102%);
      }
    }

    .trending {
      display: flex;
      flex-direction: column;
      gap: 15px;
      border-radius: 4px;
      background-color: #2e2e2e;
      padding: 10px;

      .whats-happening {
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-width: 0;

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
