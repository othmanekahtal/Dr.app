<template>
<div class="login">
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
</template>

<script>
import InputIcon from "./InputIcon";
import Gradient_btn from './Gradient_btn';
import Icon from "./Icon";

export default {
  name: "login.vue",
  components: {InputIcon, Icon,Gradient_btn}
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/Abstracts/variables";
%center{
  text-align: center;
}
.login {
  border-radius: 1rem;
  background-color:white;
  padding: 7.5rem 3.5rem;
  width: 22.5vw;
  display: flex;
  flex-direction: column;
  row-gap: 2.75rem;
}
.title {
  @extend %center;
  letter-spacing: .25rem;
  font-size: 4.5rem;
  font-weight: 700;
  display: block;
  color: $purple-color;
}
p {
  @extend %center;
  color:$gray-2-color;
  font-weight: 500;

}
.forget-link {
  @extend %center;
  font-size: 1.4rem;
  text-decoration: none;
  color: rgba($gray-2-color,.8);
}
.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.5rem;
}
.input-group {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
</style>