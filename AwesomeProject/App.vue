<template>
  <root >
  <app-navigator></app-navigator>
  </root>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import Vuelidate from 'vuelidate';
import { Root } from "native-base";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "vue-native-router";
import HomeScreen from "./screens/Home.vue";
import DetailsScreen from "./screens/Details.vue";
import SplashScreen from "./screens/Splash.vue";

// registering all native-base components to the global scope of the Vue  
Vue.use(VueNativeBase);
Vue.use(Vuelidate);

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: StackNavigator
});

const AppNavigator = createAppContainer(InitialNavigator);

export default {
  components: {Root, AppNavigator },
}
</script>

<style>
.container {
  flex: 1;
  background-color: brown
}
</style>