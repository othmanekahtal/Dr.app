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
        <InputIcon @transferData="Fill" point="username" input-type="text" input-placeholder="Username"
                   IconID="#icon-user"/>
        <InputIcon @transferData="Fill" point="email" input-type="text" input-placeholder="Email" IconID="#icon-mail"/>
        <InputIcon @transferData="Fill" point="password" input-type="password" input-placeholder="Password"
                   IconID="#icon-log-in"/>
        <InputIcon @transferData="Fill" point="re_password" input-type="password" input-placeholder="Repeat Password"
                   IconID="#icon-log-in"/>
      </div>
      <Gradient_btn @click="register" Content="Sign up"/>
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

import {reactive} from "vue";
import swal from "sweetalert";

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
    let result = {};
    const Fill = (data, point) => {
      // console.log(InfoUser)
      InfoUser[point] = data;
      // console.log(point)
    }
    const form_data = new FormData();

    async function register() {
      if (!(InfoUser.username && InfoUser.email && InfoUser.password && InfoUser.re_password)) {
        swal({
          text: "You can't send empty inputs",
          icon: "warning",
          button: "OK",
        });
      } else {
        if (InfoUser.password !== InfoUser.re_password) {
          swal({
            text: "Passwords not match",
            icon: "error",
            button: "OK",
          });
        } else {
          form_data.append("email", InfoUser.email);
          form_data.append('password', InfoUser.password);
          form_data.append('username', InfoUser.username);
          form_data.append('repeat_password', InfoUser.re_password);
          const request = await fetch('http://localhost/back-end/user/register', {
            method: 'POST',
            body: form_data
          });
          result = await request.json();
          if (result.error) {
            document.body.insertAdjacentHTML('afterbegin', `<div class="error_message">${result.message}</div>`);
          } else {
            swal({
              title: "Your account saved!",
              text: "thank you for register, log in now",
              icon: "success",
              button: "ok",
            });
            document.querySelector('.error_message') && document.querySelector('.error_message').remove();
            InfoUser.re_password = InfoUser.password = InfoUser.username = InfoUser.email = null;
          }
        }
      }
    }

    return {Fill, register}
  },
}


// export default {
//   name: "login.vue",
//   setup() {
//     const InfoUser = reactive({
//       email: null,
//       password: null,
//       result:null
//     })
//     const Fill = (data, point) => {
//       // console.log(InfoUser)
//       InfoUser[point] = data;
//       // console.log(point)
//     }
//     const form_data = new FormData();
//
//     function login() {
//       console.log(InfoUser.password, InfoUser.email)
//
//       if(!(InfoUser.password && InfoUser.email)) swal({
//         text: "You can't send empty inputs",
//         icon: "warning",
//         button: "OK",
//       });
//       else{
//         form_data.append("email", InfoUser.email);
//         form_data.append('password', InfoUser.password);
//         fetch('http://localhost/back-end/user/login', {
//           method: 'POST',
//           body: form_data
//         }).then(respond => respond.json()).then(data => InfoUser.result = data);
//         if(InfoUser.result && InfoUser.result.error){
//           document.body.insertAdjacentHTML('afterbegin',`<div class="error_message">${InfoUser.result.message}</div>`);
//         }else {
//           console.log(InfoUser.result,InfoUser.result.userInfo);
//           localStorage.setItem('id',InfoUser.result.userInfo.id);
//           localStorage.setItem('username',InfoUser.result.userInfo.username);
//           localStorage.setItem('token', InfoUser.result.token);
//           document.querySelector('.error_message') && document.querySelector('.error_message').remove();
//           router.push({name:'dashboard'})
//         }
//       }
//     }
//
//
//     return {...toRefs(InfoUser), Fill, login}
//   },
//   components: {InputIcon, Gray_btn, Icon, Gradient_btn},
//
// }
</script>
<style lang="scss" scoped>
@import "../assets/sass/Components/_forms.scss";

.back-part {
  background-image: linear-gradient(to top right, rgba(black, .05), rgba(black, .05)), url('../assets/images/background.png');
}
</style>