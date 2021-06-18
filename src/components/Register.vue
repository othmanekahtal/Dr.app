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
    <p>or use your email account :</p>
    <div class="input-group">
      <InputIcon input-type="text" input-placeholder="Username" IconID="#icon-user"/>
      <InputIcon input-type="text" input-placeholder="Email" IconID="#icon-mail"/>
      <InputIcon input-type="password" input-placeholder="Password" IconID="#icon-log-in"/>
      <InputIcon input-type="password" input-placeholder="Repeat Password" IconID="#icon-log-in"/>
    </div>
    <Gradient_btn Content="Sign up"/>
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
export default {
  name: "register",
  components: {InputIcon, Gray_btn, Icon, Gradient_btn}
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/Components/_forms.scss";
.back-part {
  background-image: linear-gradient(to top right,rgba(black,.05),rgba(black,.05)),url('../assets/images/background.png');
}
</style>