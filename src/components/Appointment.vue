<template>
  <div class="title">Your Appointment</div>
  <div class="rows">
    <Row v-for="row in records" v-bind:key="row.id" :RowInfo="row"/>
  </div>
</template>

<script>
import Row from "../components/Row";
import {onMounted, reactive, ref, toRefs} from "vue";
import router from "../router";
// import {onMounted, reactive, toRefs} from "vue";

export default {
  name: "Dashboard",
  components: {
    Row
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
    return {...toRefs(result_request),loading}
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
</style>