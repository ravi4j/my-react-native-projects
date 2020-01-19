<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-body>
        <nb-title>Search</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <nb-item :error="(!$v.textValue.required ) && $v.textValue.$dirty">
          <nb-input placeholder="Search Shimpment" v-model="textValue" auto-capitalize="none"  :on-blur="() => $v.textValue.$touch()" />
        </nb-item>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button block :on-press="getDetails">
          <nb-text>Search</nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
import {NavigationActions} from 'vue-native-router';
import {Toast} from 'native-base';
import {required} from 'vuelidate/lib/validators';
import store from '../store';

export default {
  name: 'app',
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      textValue: '',
      btnClickCount: 0,
    };
  },
  created() {},
  validations: {
    textValue: {
      required,
    },
  },
  methods: {
    getDetails() {
      if (this.textValue) {
        this.navigation.navigate('Details');
      } else {
        Toast.show({
          text: 'Invalid Text',
          buttonText: 'Okay',
        });
      }
    },
  },
  computed: {
    config() {
      return store.state.config;
    },
    handleBtnClickCount: function() {
      this.btnClickCount = this.btnClickCount + 1;
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
