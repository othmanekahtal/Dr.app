<template>
  <div :class="['row',RowInfo.status]" :id="RowInfo.id">
    <div class="from">
      <svg class="from-icon">
        <use :href="`${sprite}#icon-from`"/>
      </svg>
      <span class="from-content">
      {{ RowInfo.from }}
    </span>
    </div>
    <div class="to">
      <svg class="to-icon">
        <use :href="`${sprite}#icon-to`"/>
      </svg>
      <span class="to-content">
      {{ RowInfo.to }}
    </span>
    </div>
    <div :class="['Status',RowInfo.status]">
      <svg class="status-icon">
        <use :href="`${sprite}#icon-${RowInfo.status}`"/>
      </svg>
      <span class="status-content">
      {{ RowInfo.status }}
    </span>
    </div>
    <div class="actions">
      <router-link :to="{name:'update',params:{id_record:RowInfo.id}}">

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

export default {
  name: "Row",
  data() {
    return {
      sprite: Sprite,
    }
  },
  methods: {
    delete(event) {
      const parent = event.target.closest('.row');
      const id = parent.id;
      console.log(id)
      if(this.RowInfo.status!=='pending') return;
      this.RowInfo.status = 'cancelled';
      parent.classList.add('cancelled_appointment');
    },
  },
  props: {
    RowInfo: {
      type: Object,
      default: {}
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

  &.cancelled,&.completed{
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