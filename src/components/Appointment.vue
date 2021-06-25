<template>
  <div class="title">Your Appointment</div>
  <div class="rows" v-if="records.length">
    <Row v-for="row in records" v-bind:key="row.id" :RowInfo="row"/>
  </div>
  <div class="no-appointment" v-else>
    <div>
      No Appointment yeat!
    </div>

      <router-link :to="{name:'add'}">
        <Gradient_btn Content="Add new appointment"/>
      </router-link>

  </div>
</template>

<script>
import Row from "../components/Row";
import {onMounted, reactive, ref, toRefs} from "vue";
import router from "../router";
import Gradient_btn from "./Gradient_btn";
// import {onMounted, reactive, toRefs} from "vue";

export default {
  name: "Dashboard",
  components: {
    Row,
    Gradient_btn
  },
  setup() {
    let loading = ref(true);
    let headersOption = new Headers();
    let result_request = reactive({records: []});
    onMounted(() => {
      (async () => {
        headersOption.append("authorization", `Bearer ${localStorage.getItem('token')}`);
        let requestOption = {
          method: 'GET',
          headers: headersOption,
        }
        let request = await fetch(`http://localhost/back-end/api/records/${localStorage.getItem('id')}`, requestOption);
        let result = await request.json();
        if (result.error) {
          console.log('error');
          await router.push({name: 'login'})
        } else {
          result_request.records = result.records;
          console.log(result_request.records)
          loading.value = false;
        }
      })()
    });
    return {...toRefs(result_request), loading}
  },

}
</script>

<style lang="scss" scoped>
.rows {
  height: 90%;
  overflow: auto;
  margin: 5rem 0;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;

  &::-webkit-scrollbar {
    display: none;

  }
}

.no-appointment {
  margin-top: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 3.5rem;
  .button {
    border-radius: .5rem;
    padding: 1.5rem 3.5rem;
    background-color: #7166e0;
    color: white;
    transition: .25s linear;
    &:hover{
      background-color:darken(#7166e0,5%);

    }
  }

  a {
    color: white;
    text-decoration: none;
  }
}
</style>