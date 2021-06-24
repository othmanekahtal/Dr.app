<template>
  <div class="title">Add new appointment</div>
  <div class="form">
    <InputIcon @transferData="send" input-type="date" IconID="#icon-calendar" point="date"/>
    <div class="time">
      <svg class="time__icon">
        <use href="../assets/images/sprite.svg#icon-clock"/>
      </svg>
      <select name="select_time" id="select_time" @blur="Fill($event.target.value,'time')">
        <option v-if="!(not.includes(1))" value="1">
          08:00
        </option>
        <option v-if="!(not.includes(2))" value="2">10:00</option>
        <option v-if="!(not.includes(3))" value="3">12:00</option>
        <option v-if="!(not.includes(4))" value="4">14:00</option>
        <option v-if="!(not.includes(5))" value="5">16:00</option>
      </select>
    </div>
    <div class="button">
      <router-link :to="{name:'appointment'}">
        <Gray_btn Content="Return to dashboard"/>
      </router-link>
      <Gradient_btn @click="add" Content="Add Appointment"/>
    </div>
  </div>
</template>

<script>
import InputIcon from "./InputIcon";
import Gradient_btn from "./Gradient_btn";
import Gray_btn from "./Gray_btn";
import {reactive, toRefs} from "vue";
import swal from "sweetalert";

export default {
  components: {InputIcon, Gradient_btn, Gray_btn},
  name: "add",
  setup() {

    let result_request = reactive({not: []});
    const appointment = reactive({
      date: null,
      time: null
    })
    const Fill = (data, point) => {
      console.log('work fill function')
      appointment[point] = data;
    }
    const send = async (data, point) => {
      Fill(data, point);
      let headersOption = new Headers();
      const form_data = new FormData();
      form_data.append('date', null);
      headersOption.append('authorization', `Bearer ${localStorage.getItem('token')}`)
      form_data.set('date', appointment.date);
      let requestOption = {
        method: 'POST',
        headers: headersOption,
        body: form_data
      }
      const request = await fetch('http://localhost/back-end/api/available/', requestOption);
      const result = await request.json();
      if (result.error) {
        await swal({
          title: "Something wrong!",
          text: "system crashed,contact us please ",
          icon: "error",
          button: "OK",
        });
      } else {
        if (result.not) {
          result_request.not = result.not.map(element => +element.time);
        }
      }
    }
    const add = async () => {
      console.log(appointment)
      let headersOption = new Headers();
      const form_data = new FormData();
      form_data.append('date', null);
      headersOption.append('authorization', `Bearer ${localStorage.getItem('token')}`)
      if (!(appointment.date || appointment.time)) return;
      form_data.set('date', appointment.date);
      form_data.set('time', appointment.time);
      form_data.set('user_id', localStorage.getItem('id'));
      let requestOption = {
        method: 'POST',
        headers: headersOption,
        body: form_data
      }
      const request = await fetch('http://localhost/back-end/api/add/', requestOption);
      const result = await request.json();
      if (result.error) {
        await swal({
          title: "Something wrong!",
          text: "system crashed,contact us please ",
          icon: "error",
          button: "OK",
        });
      } else {
        await swal({
          title: "Appointment successfully added!",
          icon: "success",
          button: "OK",
        })
        //     .then(()=>{
        //   // window.location.pathname ='/dashboard/appointment'
        // });
        appointment.date = appointment.time = null;
      }
    }
    return {add, send, Fill, ...toRefs(result_request)}
  },

}
</script>
<style lang="scss" scoped>
@import '../assets/sass/Abstracts/variables';

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

.time {
  position: relative;
  width: 100%;
  border-radius: .5rem;
  display: flex;
  column-gap: 3rem;
  align-items: center;
  background-color: $color-Grey-light-3;
  padding: 12.5px 0 12.5px 1.5rem;

  &__icon {
    fill: $gray-2-color;
    width: 2rem;
    height: 2rem;
  }

  select {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    text-indent: 6.5rem;
    background-color: transparent;
    border: none;
    outline: none;
    appearance: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    color: #525252;
    caret-color: #a2a2a2;
    border-radius: 0.5rem;
  }
}

</style>