<template>
  <div class="register">
    <div class="front-part">
      <div class="title">
        Sign up
      </div>
      <div class="icons">
        <Icon Id="#icon-facebook1"/>
        <Icon Id="#icon-google"/>
        <Icon Id="#icon-twitter"/>
      </div>
      <p>or use your email account</p>
      <div class="input-group">
        <InputIcon @transferData="Fill" point="username" input-type="text" input-placeholder="Username" IconID="#icon-user"/>
        <InputIcon @transferData="Fill" point="email" input-type="text" input-placeholder="Email" IconID="#icon-mail"/>
        <InputIcon @transferData="Fill" point="password" input-type="password" input-placeholder="Password" IconID="#icon-log-in"/>
        <InputIcon @transferData="Fill" point="re_password" input-type="password" input-placeholder="Repeat Password" IconID="#icon-log-in"/>
      </div>
      <Gradient_btn @click="ShowData" Content="Sign up"/>
    </div>
    <div class="back-part">
      <div class="title-back">
        welcome back
      </div>
      <p>
        Enter your information for get access to your Account
      </p>
      <Gray_btn Content="sign up"/>
    </div>
  </div>
</template>

<script>
import InputIcon from "./InputIcon";
import Gradient_btn from './Gradient_btn';
import Gray_btn from './Gray_btn';
import Icon from "./Icon";
import useAPI from "../use/API.js";
import {reactive, toRefs} from "vue";

export default {
  name: "register",
  components: {InputIcon, Gray_btn, Icon, Gradient_btn},
  setup() {
    const InfoUser = reactive({
      email: null,
      password: null,
      re_password: null,
      username: null

    })
    const Fill = (data, point) => {
      // console.log(InfoUser)
      InfoUser[point] = data;
      // console.log(point)
    }

    const ShowData = () => {
      console.log(InfoUser)
      // console.log(InfoUser.email)
    }

    const API = useAPI();
    //here we need to pass params to sending request
    API.call('url',{});
    return {...toRefs(InfoUser),...API, Fill, ShowData}
  },
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/Components/_forms.scss";

.back-part {
  background-image: linear-gradient(to top right, rgba(black, .05), rgba(black, .05)), url('../assets/images/background.png');
}
</style>