<template>
  <div class="page">
    <img src="../assets/images/404.svg" alt="error 404">

    <router-link :to="{name:'appointment'}">
      <Gradient_btn Content="Return to Home page"/>
    </router-link>
  </div>
</template>

<script>
import Gradient_btn from "../components/Gradient_btn";
export default {
  name: "404",
  components: {Gradient_btn}
}
</script>

<style lang="scss" scoped>
.page {
  width: 75vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;

  img {
    width: 100%;
  }
}
</style>