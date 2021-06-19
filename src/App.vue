<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <!--  <router-view/>-->
  <!--  <input type="text" v-model="$store.state.test">-->
  <router-view></router-view>
<!--  <input type="text" v-model="valueInput">-->
<!--  <button @click="changeEmail(valueInput)">Change</button>-->
<!--  <span>{{ username }} {{ password }}</span>-->
</template>

<script>
import {mapState, mapMutations} from 'vuex';
// import {ref,reactive,computed} from "vue";

export default {
  setup() {
  },
  data() {
    return {
      valueInput: '',
    }
  },
  computed: {
    ...mapState(['username', 'password'])
  }, methods: {
    ...mapMutations(['changeEmail'])
  }
}
</script>

<style>
button {
  position: relative;
  z-index: 1000;
}
</style>