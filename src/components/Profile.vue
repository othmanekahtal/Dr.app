<template>
  <div class="profile-control">
    <div class="profile" @click="Toggle">
      <div class="profile__avatar">
        <img
            src="https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18550.jpg"
            alt="user-avatar">
      </div>
      <span class="profile__username">{{ username }}</span>
    </div>
    <ul class="panel">
      <Option/>
      <!--      <Component @TransferEvent='function here'/>-->
    </ul>
  </div>

</template>

<script>
import Option from "./Option";
import {mapState} from 'vuex';

export default {
  name: "Profile",
  components: {Option},
  methods: {
    Toggle(event) {
      const parent = event.target.closest('.profile');
      parent.classList.toggle('profile--active')
    }
  },
  computed: {
    ...mapState(['username'])
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/Abstracts/variables";

.profile-control {
  position: relative;
  min-width: 250px;
}

.profile {
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  align-self: stretch;
  padding: 7.5px 15px;
  position: relative;
  transition: all 0.25s ease;

  &__avatar {
    height: 45px;
    width: 45px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      margin-right: 10px;
      border: 2px solid transparent;
      transition: border .25s ease-in-out;
    }
  }

  &__username {
    text-transform: capitalize;
    margin-left: 10px;
  }

  &:hover {
    box-shadow: 0 0 5px $color-Grey-light-2;
    background-color: $color-Grey-light-3;

    .profile__username {
      color: $color-Grey-dark-2;
    }

    img {
      border-color: $color-Grey-dark-3;
    }
  }

  &--active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: unset;
    z-index: 15;
    background-color: $color-Grey-light-3;

    img {
      border-color: $color-Grey-dark-3;
    }

    & ~ .panel {
      height: auto;
    }
  }
}

.panel {
  z-index: 12;
  height: 0;
  overflow: hidden;
  position: absolute;
  background-color: $color-Grey-light-3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
}
</style>