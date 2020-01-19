<template>
  <view class="view-style">
    <text class="text-style">Splash Screen</text>
  </view>
</template>

<script>
import {NavigationActions} from 'vue-native-router';

export default {
  name: 'Splash',
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  async mounted() {
    var data = await this.performTimeConsumingTask();
    if (data != null) {
      this.navigation.navigate('App');
    }
  },
  methods: {
    async performTimeConsumingTask() {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve('result');
        }, 2000),
      );
    },
  },
};
</script>

<style>
.view-style {
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
}
.text-style {
  color: white;
  font-size: 40;
  font-weight: bold;
}
</style>