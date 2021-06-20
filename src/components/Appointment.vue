<template>
  <div class="title">Your Appointment</div>
  <div class="rows">
    <Row v-for="row in Rows" v-bind:key="row.id" :RowInfo="row"/>
  </div>
</template>

<script>
import Row from "../components/Row";

export default {
  name: "Dashboard",
  components:{
    Row
  },
  props:{
    Rows:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style lang="scss" scoped>
.rows {
  margin: 5rem 0;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
}
</style>