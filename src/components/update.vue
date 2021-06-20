<template>
  <div class="title">Change Your Appointment</div>
  <div class="form">
    <InputIcon @transferData="Fill" inputType="datetime-local" :InputData="dataItem.from" input-placeholder="" IconID="#icon-from"
               point="from"/>
    <InputIcon @transferData="Fill" inputType="datetime-local" :InputData="dataItem.to" input-placeholder="" IconID="#icon-to" point="to"/>
    <div class="button">
      <router-link :to="{name:'appointment'}">
        <Gray_btn Content="Return to dashboard"/>
      </router-link>
      <Gradient_btn Content="Change Appointment" @click="ShowData"/>
    </div>
  </div>
</template>

<script>
import InputIcon from "./InputIcon";
import Gradient_btn from "./Gradient_btn";
import Gray_btn from "./Gray_btn";
import {reactive, toRefs} from "vue";
import useAPI from "../use/API";

export default {
  components: {InputIcon, Gradient_btn, Gray_btn},

  data() {
    return {
      dataItem: {from:"2021-12-23T14:45",to:"2021-12-23T14:45"}
    }
  },
  setup() {
    const appointment = reactive({
      to: null,
      from: null
    })
    const Fill = (data, point) => {
      // console.log(InfoUser)
      appointment[point] = data;
      // console.log(point)
    }

    const ShowData = () => {
      // console.log('working')
      console.log(appointment)
    }
    const  add=()=>{
      // todo :collect data into object json
      // todo : verify token and add data in database
    }
    const API = useAPI();
    //here we need to pass params to sending request
    API.call('url',{});
    return {...toRefs(appointment),...API, Fill, ShowData}
  },
}
</script>

<style lang="scss" scoped>
.form {
  margin: 5rem auto;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 2.5rem;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2.5rem;

  & button {
    font-size: 1.6rem;
    padding: 1.4rem 2.5rem;
  }
}
</style>