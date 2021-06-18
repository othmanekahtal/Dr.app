<template>
  <div class="container">
    <Login @flipped ='FlipOption' class="login-part front-showed"/>
    <Register class="back-visible "/>
  </div>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  name: "LoginRegister",
  components: {Login, Register},
  methods: {
    FlipOption(event) {
      console.log(event)
      console.log('eee')
      let container = event.target.closest('.container');
      container.classList.toggle('reverse');
      [...container.children].forEach(child => {
        child.classList.toggle('front-showed');
        child.classList.toggle('back-visible')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
}

.reverse {
  flex-direction: row-reverse;
}

</style>