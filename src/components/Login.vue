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
        <InputIcon input-type="text" input-placeholder="Email" IconID="#icon-mail"/>
        <InputIcon input-type="password" input-placeholder="Password" IconID="#icon-log-in"/>
        <router-link class="forget-link" to="/forget">forget your password ?</router-link>
      </div>
      <Gradient_btn Content="Sign in"/>
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

export default {
  name: "login.vue",
  components: {InputIcon, Gray_btn, Icon, Gradient_btn},
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/Components/_forms.scss";

.back-part {
  background-image: linear-gradient(to top right, rgba(black, .05), rgba(black, .05)), url('../assets/images/background.png');
}
</style>