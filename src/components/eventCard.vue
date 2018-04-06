<template>
  <p
    :class="cssClasses"
    class="event-item"
    @click="$emit('click', event, $event)"
  >
    <slot
      v-if="showTitle"
      :event="event"
    >
      Def: {{ event.title }}
    </slot>
  </p>
</template>

<script>
import { isSameDay, getDay } from 'date-fns';

export default {
  props: {
    event: {
      type: Object,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    firstDay: {
      type: Number,
      required: true,
    },
  },

  computed: {
    cssClasses() {
      let cssClasses = this.event.cssClass;

      if (!Array.isArray(cssClasses)) {
        cssClasses = [cssClasses];
      } else {
        cssClasses = Array.from(cssClasses);
      }

      if (isSameDay(this.start, this.day)) {
        cssClasses.push('is-start');
      }

      if (isSameDay(this.end, this.day)) {
        cssClasses.push('is-end');
      }

      if (!this.event.isShow) {
        cssClasses.push('is-opacity');
      }

      return cssClasses.join(' ');
    },

    showTitle() {
      return (
        getDay(this.date) === this.firstDay || isSameDay(this.start, this.day)
      );
    },

    start() {
      return this.event.start;
    },

    end() {
      return this.event.end;
    },
  },
};
</script>
