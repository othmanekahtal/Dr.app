<template>
    <svg class="icon">
      <use :href="Sprite+Id"></use>
    </svg>
</template>

<script>
import sprite from '../assets/images/sprite.svg';
export default {
  name: "Icon",
  data() {
    return {
      Sprite: sprite,
    }
  },
  props: {
    Id: {
      type: String,
      default: '#icon-log-in'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/Abstracts/variables";
.icon{
    fill: darken($gray-color,25%);
    width: 4rem;
    height: 4rem;
}
</style>