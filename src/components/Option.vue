<template>
  <li class="option">
    <router-link class="router-link" :to="{name:'add'}">
      <svg class="option__icon">
        <use :href="`${sprite}#icon-add`"/>
      </svg>
      <div class="option__content">add new appointment</div>
    </router-link>
  </li>
  <li class="option option--danger" @click="logout">
    <svg class="option__icon">
      <use :href="`${sprite}#icon-from`"/>
    </svg>
    <div class="option__content">log out</div>
  </li>
  <li class='option option--danger' @click="deleteAccount">
    <svg class="option__icon">
      <use :href="`${sprite}#icon-denied`"/>
    </svg>
    <div class="option__content">delete my account</div>
  </li>
</template>

<script>
import Sprite from "../assets/images/sprite.svg";
import {mapState} from 'vuex';
import router from "../router";
import swal from 'sweetalert';


export default {
  name: "Option",
  data() {
    return {
      sprite: Sprite,

    }
  },
  props: {
    option: {
      type: Object,
      default: {}
    }
  },
  computed:{
    ...mapState(['id'])
  },
  methods: {
    logout(){
      // todo : we need to destroy localStorage,
      // todo : send user to login
      console.log(this.id)
      router.push({name:'LoginRegister'})
    },
    deleteAccount(){
      // todo: send a request to back end to delete account user
      // todo: verify token,password account!
      // todo : change status in data bas
      // todo : send to login
      swal("Oops!", "Something went wrong!", "error");

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/Abstracts/variables';

.option {
  cursor: pointer;
  padding: 7.5px 15px;
  display: flex;
  align-items: center;
  column-gap: 15px;
  transition: all .35s linear;

  .router-link {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }

  &:hover &__content {
    color: $color-Grey-dark-2;
  }

  &--danger {
    background-color: rgba($color-Red-1, .45);

    &:hover {
      background-color: rgba($color-Red-1, .65);
    }

    &:hover * {
      fill: darken($color-Red-1, 15%);
      color: darken($color-Red-1, 15%) !important;
    }

    & .option__content {
      color: $color-Red-1;
    }

    & .option__icon {
      fill: $color-Red-1;
    }
  }

  &__icon {
    width: 25px;
    height: 25px;
    fill: $color-Grey-dark;
  }

  &__content {
    line-height: 45px;
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
    color: #525252;
  }
}

</style>