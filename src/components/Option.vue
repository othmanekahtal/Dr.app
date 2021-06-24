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
      <use :href="`${sprite}#icon-logout`"/>
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
  computed: {
    ...mapState(['id'])
  },
  methods: {
    logout() {
      localStorage.clear();
      console.log(this.id)
      router.push({name: 'LoginRegister'})
    },
    deleteAccount() {
      swal({
        title: "are you sure!",
        text: "You can't access to your account when delete it",
        icon: "warning",
        button: "OK",
      }).then(value => {
        if (value) {
          let headersOption = new Headers();
          headersOption.append("authorization", `Bearer ${localStorage.getItem('token')}`);
          let requestOption = {
            method: 'DELETE',
            headers: headersOption,
          }
          fetch(`http://localhost/back-end/user/archived_account/${localStorage.getItem('id')}`, requestOption).then(result => result.json()).then(final => {
            if (!final.error) {
              localStorage.clear()
              swal({
                title: "Your Account archived successfully!",
                icon: "success",
                button: "OK",
              }).then(() => {
                    router.push({name: 'Home'})
                  }
              )
            }
          })
        }
      });
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