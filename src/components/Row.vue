<template>
  <div :class="['row',record.status]" :id="record.id">
    <div class="from">
      <svg class="from-icon">
        <use :href="`${sprite}#icon-calendar`"/>
      </svg>
      <span class="from-content">
      {{ record.date }}
    </span>
    </div>
    <div class="to">
      <svg class="to-icon">
        <use :href="`${sprite}#icon-clock`"/>
      </svg>
      <span class="to-content">
      {{ time[record.time - 1] }}
    </span>
    </div>
    <div :class="['Status',record.status]">
      <svg class="status-icon">
        <use :href="`${sprite}#icon-${record.status}`"/>
      </svg>
      <span class="status-content">
      {{ record.status }}
    </span>
    </div>
    <div class="actions">
      <router-link :to="{name:'update',params:{id_record:record.id}}" @click="save(record.id)">
        <svg class="edit">
          <use :href="`${sprite}#icon-edit`"/>
        </svg>
      </router-link>

      <svg class="delete" @click="delete">
        <use :href="`${sprite}#icon-delete`"/>
      </svg>
    </div>
  </div>
</template>

<script>
import Sprite from "../assets/images/sprite.svg";
import {mapMutations} from "vuex/dist/vuex.mjs";
import {mapState} from "vuex/dist/vuex.mjs";

export default {
  name: "Row",
  data() {
    return {
      sprite: Sprite,
      time: ["08:00", "10:00", "12:00", "14:00", '16:00'],
      rows: {}
    }
  },
  methods: {
    ...mapMutations(['changeState']),
    delete(event) {
      swal({
        title: 'are you sure ?',
        icon: "warning",
        button: "ok",
      }).then(async (value) => {
        if (value) {
          const parent = event.target.closest('.row');
          const id = parent.id;
          console.log(id)
          let headersOption = new Headers();
          headersOption.append("authorization", `Bearer ${localStorage.getItem('token')}`);
          let requestOption = {
            method: 'delete',
            headers: headersOption,
          }
          if (this.record.status !== 'pending') return;
          const request = await fetch(`http://localhost/back-end/api/status/${localStorage.getItem('id')}/${id}`, requestOption);
          const result = await request.json();
          if (!result.error) {
            this.record.status = 'cancelled';
            parent.classList.add('cancelled_appointment');
          } else {
            swal({
              title: result.message,
              icon: "error",
              button: "ok",
            });
          }
        }
      })
    },
    save(id){
      localStorage.setItem('id_record',id);
    }
  },
  props: {
    RowInfo: {
      type: Object,
      default: {}
    }
  },
  computed: {
    ...mapState(['id','id_record','date']),
    record() {
      this.rows = this.RowInfo;
      return this.rows
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/Abstracts/variables';

.row {
  display: grid;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  grid-template-columns: repeat(4, 25%);
  grid-column-gap: 2.5rem;
  justify-content: center;
  background-color: $color-Grey-light-3;
  color: $color-Grey-dark-3;
  transition: .25s linear;

  &.cancelled, &.completed {
    &:hover {
      background-color: $color-Grey-light-3;
    }

    & .actions {
      a {
        pointer-events: none;
      }

      svg {
        cursor: not-allowed;

        &.delete {
          fill: lighten($color-Red-1, 15%);

          &:hover {
            fill: lighten($color-Red-1, 15%);
          }
        }

        &.edit {
          fill: $color-Grey-dark-3;

          &:hover {
            fill: $color-Grey-dark-3;
          }
        }
      }
    }
  }

  &:hover {
    background-color: white;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: $color-Grey-dark-2;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2.5rem;
  }

  .Status {
    &.pending {
      $color: rgba(#FFD369, 85%);

      & > * {
        color: $color;
        fill: $color;
      }
    }

    &.completed {
      $color: rgba(#9EDE73, 85%);

      & > * {
        color: $color;
        fill: $color;
      }
    }

    &.cancelled {
      $color: rgba(#FF616D, 85%);

      & > * {
        color: $color;
        fill: $color;
      }
    }

    &.denied {
      $color: rgba(#E40017, 85%);

      & > * {
        color: $color;
        fill: $color;
      }
    }

  }

  .actions {
    svg {
      cursor: pointer;
      transition: .25s linear;
    }

    .delete {
      fill: lighten($color-Red-1, 15%);

      &:hover {
        fill: $color-Red-1;
      }
    }

    .edit {
      fill: $color-Grey-dark-3;

      &:hover {
        fill: $color-Grey-dark-1;
      }
    }
  }
}
</style>