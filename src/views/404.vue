<template>
  <div class="page">
    <img src="../assets/images/404.svg" alt="error 404">

    <router-link :to="{name:'appointment'}">
      <div class="button">Return to Home page</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "404"
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

  .button {
    border-radius: .5rem;
    padding: 1.5rem 3.5rem;
    background-color: #7166e0;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
  }
}
</style>