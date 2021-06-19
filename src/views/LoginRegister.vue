<template>
  <div class="container">
    <Login class="login-part front-showed"/>
    <Register class="back-visible "/>
  </div>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  name: "LoginRegister",
  components: {Login, Register},
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