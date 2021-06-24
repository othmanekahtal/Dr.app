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
      <Gradient_btn @click="login" Content="Sign in"/>
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

import {reactive,ref, toRefs} from 'vue';
import swal from "sweetalert";
import router from "../router";

export default {
  name: "login.vue",
  setup() {
    const InfoUser = reactive({
      email: null,
      password: null,
    })
    let result = ref();
    const Fill = (data, point) => {
      // console.log(InfoUser)
      InfoUser[point] = data;
      // console.log(point)
    }
    const form_data = new FormData();
    async function login() {
      console.log(InfoUser.password, InfoUser.email)

      if(!(InfoUser.password && InfoUser.email)) swal({
        text: "You can't send empty inputs",
        icon: "warning",
        button: "OK",
      });
      else{
        form_data.append("email", InfoUser.email);
        form_data.append('password', InfoUser.password);
        const request =await fetch('http://localhost/back-end/user/login', {
          method: 'POST',
          body: form_data
        });
        result.value = await request.json();
        if(result.value.error){
          document.querySelector('.error_message') && document.querySelector('.error_message').remove();
          document.body.insertAdjacentHTML('afterbegin',`<div class="error_message">${result.value.message}</div>`);
        }else {
          console.log(result,result.value.userInfo);
          localStorage.setItem('id',result.value.userInfo.id);
          localStorage.setItem('username',result.value.userInfo.username);
          localStorage.setItem('token', result.value.token);
          document.querySelector('.error_message') && document.querySelector('.error_message').remove();
          await router.push({name: 'appointment'})
        }
      }
    }


    return {...toRefs(InfoUser), Fill, login}
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