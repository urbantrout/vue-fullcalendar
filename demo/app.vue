<template>
  <div>
    <p>
      Here is the demo of vue-fullcalendar, no jquery fullcalendar.js required!
    </p>
    <full-calendar
      :events="fcEvents"
      :first-day="1"
      class="test-fc"
      locale="en"
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick"
    >
      <template
        slot="fc-event-card"
        scope="p"
      >
        <p><i class="fa">Title:</i> {{ p.event.title }}</p>
      </template>
      <template slot="fc-header-left">
        left
      </template>


      <template
        slot="fc-header-center"
        slot-scope="{title, rightArrow, leftArrow, goPrev, goNext, currentMonth}"
      >
        <span
          class="prev-month"
          @click.stop="goPrev"
        >prev</span>

        <span class="title">{{ title }}</span>

        <span
          class="next-month"
          @click.stop="goNext"
        >next</span>
      </template>

      <template slot="fc-header-right">
        right
      </template>
    </full-calendar>
  </div>
</template>
<script>
import { format } from 'date-fns';
import FullCalendar from 'src/fullCalendar.vue';

const demoEvents = [
  {
    title: 'Sunny 725-727',
    start: '2018-04-04',
    end: '2018-04-04',
    cssClass: 'family',
  },
  {
    title: 'Random Event',
    start: '2018-02-26',
    end: '2018-02-27',
    cssClass: ['home', 'work'],
  },
  {
    title: 'Random Event',
    start: '2018-02-27',
    end: '2018-02-28',
  },
  {
    title: 'Random Event',
    start: '2018-02-27',
    end: '2018-02-28',
  },
  {
    title: 'Random Event',
    start: '2018-02-27',
    end: '2018-02-28',
  },
  {
    title: 'Random Event',
    start: '2018-02-26',
    end: '2018-03-05',
  },
  {
    title: 'Random Event',
    start: '2018-01-27',
    end: '2019-01-28',
  },
  {
    title: 'Random Event',
    start: '2018-01-27',
    end: '2018-02-02',
  },
  {
    title: 'Random Event',
    start: '2018-03-27',
    end: '2018-03-28',
  },
];

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      name: 'Sunny!',
      fcEvents: demoEvents,
    };
  },
  methods: {
    changeMonth(start, end, current) {
      console.log('changeMonth', format(start), format(end), format(current));
    },
    eventClick(event, jsEvent, pos) {
      console.log('eventClick', event, jsEvent, pos);
    },
    dayClick(day, jsEvent) {
      console.log('dayClick', day, jsEvent);
    },
    moreClick(day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent);
    },
  },
};
</script>
<style lang='scss'>
.app {
  color: green;
}
</style>
