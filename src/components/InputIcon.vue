<template>
  <div class="input-box">
    <input :type="inputType" :placeholder="inputPlaceholder" class="input-box__input" v-model="InputData" :value="InputData" @change="transferData">
    <svg class="input-box__icon">
      <use :href="pathSprite+IconID"></use>
    </svg>
  </div>
</template>

<script>
import Sprite from "../assets/images/sprite.svg";
import "../assets/sass/Components/_forms.scss";
export default {
  data() {
    return {
      pathSprite: Sprite,
    }
  },
  name: "InputIcon",
  props: {
    InputValue:{
      type:String,
      default:''
    },
    InputData:{
      type:String,
      default:'',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    inputPlaceholder: {
      type: String,
      default: 'Type something...'
    },
    IconID: {
      type: String,
      default: '#icon-edit',
    },
    point: {
      type:String,
      default:null
    }
  },
  methods: {
    transferData(){
      this.$emit('transferData', this.InputData,this.point)
    },
  },
}
</script>

<style lang="scss">
@import "../assets/sass/Abstracts/variables";

.input-box {
  position: relative;
  width: 100%;

  &__input {
    all: unset;
    color: $gray-color;
    caret-color: $gray-1-color;
    background-color: $gray-3-color;
    border-radius: .5rem;
    padding: 1.25rem;
    text-indent: 3rem;
    width: 100%;
    box-sizing: border-box;
  }

  &__icon {
    fill: $gray-2-color;
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  input[type='time'],input[type='date']{
    position: relative;
  }
  input[type="time"]::-webkit-calendar-picker-indicator,input[type="date"]::-webkit-calendar-picker-indicator {
    background: none;
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>