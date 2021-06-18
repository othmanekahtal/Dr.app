<template>
<button>{{Content}}</button>
</template>

<script>
export default {
  name: "Gradient_btn",
  props: {
    Content: {
      type:String,
      default:"Button",
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/Abstracts/variables";
button {
  cursor: pointer;
  outline:none;
  border: none;
  align-self: center;
  font-weight: 300;
  color: white;
  font-size: 2.5rem;
  display: inline-block;
  border-radius: 5rem;
  padding: 1rem 7.5rem;
  box-shadow: 5px 5px 1.5rem rgba(black,.75);
  background-image: linear-gradient(to top left,$blue-color,$purple-color);
  transition: all .6s ease-in-out;
&:active {
  background-image: linear-gradient(to top left,darken($blue-color,5%),darken($purple-color,5%));
}
}
</style>