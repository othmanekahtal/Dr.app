<template>
  <button @click="FlipOption">{{ Content }}</button>
</template>

<script>
export default {
  name: "Gray_btn",
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
  },
  props: {
    Content: {
      type: String,
      default: "Button",
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/sass/Abstracts/variables";

button {
  cursor: pointer;
  outline: none;
  border: none;
  align-self: center;
  font-weight: 300;
  color: white;
  font-size: 2.5rem;
  display: inline-block;
  border-radius: 5rem;
  padding: 1rem 7.5rem;
  background-color: rgba(black, .5);
  box-shadow: 5px 5px 1.5rem rgba(black, .75);
  transition: all .6s ease-in-out;

  &:active {
    background-color: rgba(black, .75);
  }
}
</style>