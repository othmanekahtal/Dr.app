<template>
  <div class="dashboard">
    <nav class="navbar">
      <div class="navbar__welcome">
        Welcome back dear {{ username }}
      </div>
      <!--    todo state manager is not changed by dynamic function-->
      <Profile/>
    </nav>

    <div class="main" >
      <router-view class="router-view"></router-view>
    </div>
  </div>
</template>

<script>
import Profile from "../components/Profile";
import Appointment from '../components/Appointment'
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import {onMounted, reactive, ref, toRefs} from "vue";
import router from "../router";

export default {
  components: {
    Profile, Appointment
  },
  computed: {
    ...mapState(['username', 'id', "token"]),
  },
  methods: {
    ...mapMutations(['changeState']),
  },
  // setup() {
  //   let loading = ref(true);
  //   let headersOption = new Headers();
  //   let result_request = reactive({records: []});
  //   onMounted(() => {
  //     (async () => {
  //       headersOption.append("authorization", `Bearer ${localStorage.getItem('token')}`);
  //       let requestOption = {
  //         method: 'GET',
  //         headers: headersOption,
  //       }
  //       let request = await fetch(`http://localhost/back-end/api/records/${localStorage.getItem('id')}`, requestOption);
  //       let result = await request.json();
  //       if (result.error) {
  //         console.log('error');
  //         await router.push({name: 'login'})
  //       } else {
  //         result_request.records = result.records;
  //         console.log(result_request.records)
  //         loading.value = false;
  //       }
  //     })()
  //   });
  //   return {...toRefs(result_request),loading}
  // },
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
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height:70vh;
}
</style>