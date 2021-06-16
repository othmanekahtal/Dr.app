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
  border:none;
  outline: 2px solid transparent;
  align-self: center;
  font-weight: 300;
  color: white;
  font-size: 2.5rem;
  display: inline-block;
  border-radius: 5rem;
  padding: 1rem 7.5rem;
  background-image: linear-gradient(to top left,$blue-color,$purple-color);
  transition: all .6s ease-in-out;
&:active {
  outline: 2px solid darken($purple-color,10%);
}
}
</style>