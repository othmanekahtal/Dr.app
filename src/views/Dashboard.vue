<template>
  <div class="dashboard">
    <nav class="navbar">
      <div class="navbar__welcome">
        Welcome back dear {{ username }}
      </div>
      <!--    todo state manager is not changed by dynamic function-->
      <Profile/>
    </nav>
    <div class="main">
      <!--      <div class="title">Your Appointment</div>-->
      <!--      <div class="rows">-->
      <!--        <Row v-for="row in Rows" v-bind:key="row.id" :RowInfo="row"/>-->
      <!--      </div>-->
      <!--      id for update , Rows for listing appointments-->
      <router-view class="router-view" :Rows="Rows"></router-view>

    </div>
  </div>
</template>

<script>
import Profile from "../components/Profile";
import Appointment from '../components/Appointment'
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  components: {
    Profile, Appointment
  },
  data() {
    return {
      Rows: [
        {id: 12, from: '21:39', to: "21:39", status: "pending"},
        {id: 22, from: '22:39', to: "21:34", status: "completed"}
      ]
    }
  },
  computed: {
    ...mapState(['username'])
  },
  methods: {
    ...mapMutations(['changeState']),
  }
}

</script>
<style lang="scss" scoped>
@import '../assets/sass/Abstracts/variables';

.dashboard {
  position: relative;
  border-radius: 10px;
  padding: 15px;
  width: 85vw;
  height: 90vh;
  background-color: $color-Grey-light-1;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;

  &__welcome {
    font-size: 2.5rem;
    margin-left: 4rem;
  }
}

.main {
  position: absolute;
  width:100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>