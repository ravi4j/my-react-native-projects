<template>
  <view  class="container">
    <nb-container v-if="!loading" :style="{flex:1, backgroundColor: '#fff'}">
      <nb-header>
        <nb-body>
          <nb-title>Posts</nb-title>
        </nb-body>
      </nb-header>
      <nb-content>
        <nb-list   v-for="post in posts.data"  v-bind:key="post.id">
          <touchable-opacity class="container" :active-opacity="0.5">
            <view class="score">
              <text class="score-text">{{post.id}}</text>
            </view>
            <view class="detail">
              <text class="title">{{post.title}}</text>
            </view>
          </touchable-opacity>
        </nb-list>
      </nb-content>
    </nb-container>
    <nb-spinner v-if="loading"></nb-spinner>
   
  </view>
</template>

<script>
import store from '../store';

export default {
  name: 'app',
  data() {
    return {
      //posts: config
    };
  },
  created() {
    this.fetchPosts(store.state.postType);
  },
  methods: {
    fetchPosts(type) {
      return store.dispatch('FETCH_POSTS_DATA', {
        type: type,
      });
    },
  },
  computed: {
    config() {
      return store.state.config;
    },
    postType() {
      return store.state.postType;
    },
    posts() {
      return store.state.posts;
    },
    loading() {
      return store.state.loadingPosts;
    },
  },
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
