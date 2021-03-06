<template>
  <div class="comp-full-calendar">
    <!-- header pick month -->
    <fc-header
      :current-month="currentMonth"
      :first-day="firstDay"
      :locale="locale"
      @change="emitChangeMonth"
    >

      <div slot="header-left">
        <slot name="fc-header-left"/>
      </div>

      <div
        slot="header-center"
        slot-scope="{title, rightArrow, leftArrow, goPrev, goNext}"
      >
        <slot
          :title="title"
          :goPrev="goPrev"
          :goNext="goNext"
          :currentMonth="currentMonth"
          :rightArrow="rightArrow"
          :leftArrow="leftArrow"
          name="fc-header-center"
        >
          <span
            class="prev-month"
            @click.stop="goPrev"
          >{{ leftArrow }}</span>

          <span class="title">{{ title }}</span>

          <span
            class="next-month"
            @click.stop="goNext"
          >{{ rightArrow }}</span>
        </slot>
      </div>

      <div slot="header-right">
        <slot name="fc-header-right"/>
      </div>
    </fc-header>

    <!-- body display date day and events -->
    <div class="full-calendar-body">
      <div class="weeks">
        <strong
          v-for="dayIndex in 7"
          :key="dayIndex"
          class="week"
        >{{ (dayIndex - 1) | localeWeekDay(firstDay, locale) }}</strong>
      </div>
      <div
        ref="dates"
        class="dates"
      >
        <div class="dates-bg">
          <div
            v-for="(week, weekIndex) in currentDates"
            :key="weekIndex"
            class="week-row"
          >
            <div
              v-for="(day, dayIndex) in week"
              :key="dayIndex"
              :class="{
                'today': day.isToday,
                'not-cur-month' : !day.isCurMonth,
                'has-event' : day.events.length,
                'has-events': day.events.length > 1,
              }"
              class="day-cell"
            >
              <p class="day-number">{{ day.monthDay }}</p>
            </div>
          </div>
        </div>

        <!-- absolute so we can make dynamic td -->
        <div class="dates-events">
          <div
            v-for="(week, weekKey) in currentDates"
            :key="weekKey"
            class="events-week"
          >
            <div
              v-for="(day, dayIndex) in week"
              :key="dayIndex"
              :class="{
                'today' : day.isToday,
                'not-cur-month' : !day.isCurMonth,
                'has-event' : day.events.length,
                'has-events': day.events.length > 1,
                'is-active': day === selectDay
              }"
              track-by="$index"
              class="events-day"
              @click.stop="dayClick(day, $event)"
            >
              <p class="day-number">{{ day.monthDay }}</p>
              <div class="event-box">
                <template v-if="eventLimit > 1">
                  <event-card
                    v-for="(event, eventKey) in day.events"
                    v-show="event.cellIndex <= eventLimit"
                    :key="eventKey"
                    :event="event"
                    :date="day.date"
                    :first-day="firstDay"
                    @click="eventClick"
                  >
                    <template scope="p">
                      <slot
                        :event="p.event"
                        name="fc-event-card"
                      />
                    </template>
                  </event-card>
                  <p
                    v-if="day.events.length > eventLimit"
                    class="more-link"
                  >
                    + {{ day.events[day.events.length -1].cellIndex - eventLimit }} more
                  </p>
                </template>
                <template v-else>
                  <event-card
                    v-for="(event, eventKey) in day.events"
                    v-if="day.events.length === 1"
                    :key="eventKey"
                    :event="event"
                    :date="day.date"
                    :first-day="firstDay"
                  >
                    <template scope="p">
                      <slot
                        :event="p.event"
                        name="fc-event-card"
                      />
                    </template>
                  </event-card>
                  <p
                    v-if="day.events.length > eventLimit"
                    class="summary-link"
                  >
                    <slot
                      :events="day.events"
                      name="daySummary"
                    >
                      {{ day.events.length }} Events
                    </slot>
                  </p>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- full events when click show more -->
        <slot
          v-if="selectDay"
          :selectDay="selectDay"
          :position="morePos"
          name="more-content"
        >
          <div
            :style="{left: morePos.left + 'px', top: morePos.top + 'px'}"
            class="more-event"
          >
            <div class="more-header">
              <span class="title">{{ moreTitle(selectDay.date) }}</span>
            </div>
            <div class="more-body">
              <ul class="body-list">
                <li
                  v-for="(event, eventKey) in selectDay.events"
                  v-show="event.isShow"
                  :key="eventKey"
                  class="body-item"
                  @click="eventClick(event, $event)"
                >
                  {{ event.title }}
                </li>
              </ul>
            </div>
          </div>
        </slot>
      </div>

      <slot name="body-card"/>

    </div>
  </div>
  </div>
</template>
<script type="text/babel">
// import langSets from './dataMap/langSets'
import dateFunc from './components/dateFunc';
import moment from 'moment';
import EventCard from './components/eventCard.vue';
import FcHeader from './components/header.vue';

export default {
  components: {
    EventCard,
    FcHeader,
  },

  filters: {
    localeWeekDay(weekday, firstDay, locale) {
      const localMoment = moment().locale(locale);
      return localMoment.localeData().weekdaysShort()[
        (weekday + parseInt(firstDay, 10)) % 7
      ];
    },
  },

  props: {
    events: {
      // events will be displayed on calendar
      type: Array,
      default: () => [],
    },
    locale: {
      type: String,
      default: 'en',
    },
    firstDay: {
      type: Number,
      validator(val) {
        const res = parseInt(val, 10);
        return res >= 0 && res <= 6;
      },
      default: 0,
    },
    eventLimit: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      currentMonth: moment().startOf('month'),
      morePos: {
        top: 0,
        left: 0,
      },
      selectDay: null,
    };
  },

  computed: {
    currentDates() {
      return this.getCalendar();
    },
  },

  mounted() {
    this.emitChangeMonth(this.currentMonth);
  },

  methods: {
    emitChangeMonth(firstDayOfMonth) {
      this.currentMonth = firstDayOfMonth;

      const start = dateFunc.getMonthViewStartDate(
        firstDayOfMonth,
        this.firstDay
      );
      const end = dateFunc.getMonthViewEndDate(firstDayOfMonth, this.firstDay);

      this.$emit('changeMonth', start, end, firstDayOfMonth);
    },

    moreTitle(date) {
      if (!date) return '';
      return moment(date).format('ll');
    },

    getCalendar() {
      // calculate 2d-array of each month
      const monthViewStartDate = dateFunc.getMonthViewStartDate(
        this.currentMonth,
        this.firstDay
      );
      const calendar = [];

      for (let perWeek = 0; perWeek < 6; perWeek += 1) {
        const week = [];

        for (let perDay = 0; perDay < 7; perDay += 1) {
          week.push({
            monthDay: monthViewStartDate.date(),
            isToday: monthViewStartDate.isSame(moment(), 'day'),
            isCurMonth: monthViewStartDate.isSame(this.currentMonth, 'month'),
            weekDay: perDay,
            date: moment(monthViewStartDate),
            events: this.slotEvents(monthViewStartDate),
          });

          monthViewStartDate.add(1, 'day');
        }
        calendar.push(week);
      }

      return calendar;
    },

    slotEvents(date) {
      // find all events start from this date
      const thisDayEvents = this.events.filter(day => {
        const st = moment(day.start);
        const ed = moment(day.end ? day.end : st);

        return date.isBetween(st, ed, null, '[]');
      });

      // sort by duration
      thisDayEvents.sort((a, b) => {
        if (!a.cellIndex) return 1;
        if (!b.cellIndex) return -1;
        return a.cellIndex - b.cellIndex;
      });

      // mark cellIndex and place holder
      for (let i = 0; i < thisDayEvents.length; i += 1) {
        thisDayEvents[i].cellIndex = thisDayEvents[i].cellIndex || i + 1;
        thisDayEvents[i].isShow = true;

        if (thisDayEvents[i].cellIndex === i + 1 || i > 2) continue;
        thisDayEvents.splice(i, 0, {
          title: 'holder',
          cellIndex: i + 1,
          start: date.format(),
          end: date.format(),
          isShow: false,
        });
      }

      return thisDayEvents;
    },

    computePos(target) {
      const eventRect = target.getBoundingClientRect();
      const pageRect = this.$refs.dates.getBoundingClientRect();
      return {
        left: eventRect.left - pageRect.left,
        top: eventRect.top + eventRect.height - pageRect.top,
      };
    },

    dayClick(day, jsEvent) {
      let events;

      if (day.events.length) {
        this.selectDay = this.selectDay !== day ? day : null;

        this.morePos = this.computePos(jsEvent.target);
        events = day.events.filter(item => item.isShow === true);
      } else {
        this.selectDay = null;
      }

      this.$emit('dayClick', day, events, jsEvent);
    },

    eventClick(event, jsEvent) {
      if (!event.isShow) return;

      jsEvent.stopPropagation();
      const pos = this.computePos(jsEvent.target);
      this.$emit('eventClick', event, jsEvent, pos);
    },
  },
};
</script>

<style lang="scss">
.comp-full-calendar {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px;
  background: #fff;
  max-width: 960px;
  margin: 0 auto;
  ul,
  p {
    margin: 0;
    padding: 0;
  }
}

.full-calendar-body {
  margin-top: 20px;
  .weeks {
    display: flex;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    .week {
      flex: 1;
      text-align: center;
      border-right: 1px solid #e0e0e0;
    }
  }
  .dates {
    position: relative;
    .week-row {
      // width: 100%;
      // position:absolute;
      border-left: 1px solid #e0e0e0;
      display: flex;
      .day-cell {
        flex: 1;
        min-height: 112px;
        padding: 4px;
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        box-sizing: border-box;

        &.today {
          background-color: #fcf8e3;
        }
        &.not-cur-month {
          .day-number {
            color: rgba(0, 0, 0, 0.24);
          }
        }
      }
    }
    .dates-events {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      .events-week {
        display: flex;
        .events-day {
          cursor: pointer;
          flex: 1;
          min-height: 112px;
          overflow: hidden;
          text-overflow: ellipsis;
          .day-number {
            padding: 4px 5px 4px 4px;
            opacity: 0;
          }
          &.not-cur-month {
            .day-number {
              color: rgba(0, 0, 0, 0.24);
            }
          }
          &.is-active {
            background-color: rgba(0, 0, 0, 0.3);
          }
          .event-box {
            .event-item {
              cursor: pointer;
              font-size: 12px;
              background-color: #c7e6fd;
              margin-bottom: 2px;
              color: rgba(0, 0, 0, 0.87);
              padding: 0 0 0 4px;
              height: 18px;
              line-height: 18px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &.is-start {
                margin-left: 4px;
                // border-top-left-radius:4px;
                // border-bottom-left-radius:4px;
              }
              &.is-end {
                margin-right: 4px;
                // border-top-right-radius:4px;
                // border-bottom-right-radius:4px;
              }
              &.is-opacity {
                opacity: 0;
              }
            }
            .more-link {
              cursor: pointer;
              // text-align: right;
              padding-left: 8px;
              padding-right: 2px;
              color: rgba(0, 0, 0, 0.38);
              font-size: 14px;
            }
          }
        }
      }
    }
    .more-events {
      position: absolute;
      width: 150px;
      z-index: 2;
      border: 1px solid #eee;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      .more-header {
        background-color: #eee;
        padding: 5px;
        display: flex;
        align-items: center;
        font-size: 14px;
        .title {
          flex: 1;
        }
        .close {
          margin-right: 2px;
          cursor: pointer;
          font-size: 16px;
        }
      }
      .more-body {
        height: 146px;
        overflow: hidden;
        .body-list {
          height: 144px;
          padding: 5px;
          overflow: auto;
          background-color: #fff;
          .body-item {
            cursor: pointer;
            font-size: 12px;
            background-color: #c7e6fd;
            margin-bottom: 2px;
            color: rgba(0, 0, 0, 0.87);
            padding: 0 0 0 4px;
            height: 18px;
            line-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .summary-link {
    padding: 5px;
  }
}
</style>
