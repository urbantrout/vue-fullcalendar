<template>
  <div class="full-calendar-header">
    <div class="header-left">
      <slot name="header-left" />
    </div>

    <div class="header-center">
      <slot
        :title="title"
        :goPrev="goPrev"
        :goNext="goNext"
        :currentMonth="currentMonth"
        name="header-center"
      />
    </div>

    <div class="header-right">
      <slot name="header-right"/>
    </div>
  </div>
</template>

<script>
import { format, addMonths, subMonths, startOfMonth } from 'date-fns';

export default {
  props: {
    currentMonth: {
      type: Date,
      default: undefined,
    },
    titleFormat: {
      type: String,
      default: undefined,
    },
    firstDay: {
      type: Number,
      default: undefined,
    },
    monthNames: {
      type: Array,
      default: undefined,
    },
    locale: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    title() {
      if (!this.currentMonth) return '';
      return format(this.currentMonth, 'MMMM YYYY');
    },
  },

  methods: {
    goPrev() {
      const newMonth = subMonths(startOfMonth(this.currentMonth), 1);

      this.$emit('change', newMonth);
    },
    goNext() {
      const newMonth = addMonths(startOfMonth(this.currentMonth), 1);
      this.$emit('change', newMonth);
    },
  },
};
</script>

<style lang="scss">
.full-calendar-header {
  display: flex;
  align-items: center;

  .header-left,
  .header-right {
    flex: 1;
  }

  .header-center {
    flex: 2;
    text-align: center;

    .title {
      margin: 0 10px;
    }

    .prev-month,
    .next-month {
      cursor: pointer;
    }
  }

  .header-right {
    text-align: right;
  }
}
</style>
