<template>
  <div class="login">
    <div class="front-part">
      <div class="title">
        Sign in
      </div>
      <div class="icons">
        <Icon Id="#icon-facebook1"/>
        <Icon Id="#icon-google"/>
        <Icon Id="#icon-twitter"/>
      </div>
      <p>or use your email account :</p>
      <div class="input-group">
        <InputIcon @transferData="Fill" point="email" input-type="text" input-placeholder="Email" IconID="#icon-mail"/>
        <InputIcon @transferData="Fill" point="password" input-type="password" input-placeholder="Password"
                   IconID="#icon-log-in"/>
        <router-link class="forget-link" to="/forget">forget your password ?</router-link>
      </div>
      <Gradient_btn @click="ShowData" Content="Sign in"/>
    </div>
    <div class="back-part">
      <div class="title-back">
        welcome back
      </div>
      <p>
        if you haven't an account to you can create one now!
      </p>
      <Gray_btn Content="sign in"/>
    </div>
  </div>
</template>

<script>
import InputIcon from "./InputIcon";
import Gradient_btn from './Gradient_btn';
import Gray_btn from './Gray_btn';
import Icon from "./Icon";

import {reactive, toRefs} from 'vue';
import useAPI from "../use/API";

export default {
  name: "login.vue",
  setup() {
    const InfoUser = reactive({
      email: null,
      password: null
    })
    const Fill = (data, point) => {
      // console.log(InfoUser)
      InfoUser[point] = data;
      // console.log(point)
    }

    const ShowData = () => {
      // console.log('working')
      console.log(InfoUser.password, InfoUser.email)
    }
    const API = useAPI();
    //here we need to pass params to sending request
    API.call('url',{});
    return {...toRefs(InfoUser),...API, Fill, ShowData}
  },
  components: {InputIcon, Gray_btn, Icon, Gradient_btn},

}
</script>
<style lang="scss" scoped>
@import "../assets/sass/Components/_forms.scss";

.back-part {
  background-image: linear-gradient(to top right, rgba(black, .05), rgba(black, .05)), url('../assets/images/background.png');
}
</style>