<template>
    <div>
        <div id="datepicker">
            <ion-label>{{ getCurrentDate() }}</ion-label>
        </div>
        <div id="week-date">
            <ion-segment v-model="value" scrollable @ionChange="segmentChanged($event)" id="segmentTabs">
                <ion-segment-button v-for="(day, index) in getWeekDays()" :key="day[0]" :value="index" :id="'segment-'+index">
                    <ion-label class="day-number">{{ day[1] }}</ion-label>
                    <ion-label class="weekday-name">{{ day[0] }}</ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>
        <ion-title>Tarefas</ion-title>
        <ion-slides @ionSlideDidChange="slideChanged($event)" :options="slideOpts" pager="false" ref="slides">
            <ion-slide v-for="i in 7" :key="i">
                <task-list :slide="i"></task-list>
            </ion-slide>
        </ion-slides>
    </div>
</template>

<script>
import { IonLabel,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonSlides,
    IonSlide
} from '@ionic/vue';
import { defineComponent } from 'vue';
import TaskList from "./TaskList.vue";

export default defineComponent({
  name: 'TasksDatePicker',
  data() {
      return {
          value: this.getWeekDay(),
      }
  },
  components: {
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonSlides,
    IonSlide,
    TaskList
  },
  methods: {
      getCurrentDate() {
          const d = new Date();
          return (d.getDate() + " de " + d.toLocaleString("default", { month: "long" }).toLowerCase() + ", " + d.getFullYear())
      },
      getWeekDays() {
        const current = new Date();
        const week = []; 
        current.setDate((current.getDate() - current.getDay()));
        for (let i = 0; i < 7; i++) {
            week.push(
                new Date(current).toLocaleString("default", { day:"2-digit", weekday: "short"}).replace(' ', '').split('.,')
            ); 
            current.setDate(current.getDate() + 1);
        }
        return week
      },
      getWeekDay() {
          const d = new Date();
          return d.getDay();
      },
      getWeekDayName() {
          const d = new Date();
          return (d.toLocaleString("default", { weekday: "short" }).replace('.',''))
      },
      async segmentChanged(ev) {
          this.focusSegment(ev.srcElement.children[this.value].id);
          await this.$refs.slides.$el.slideTo(this.value);
      },
      focusSegment(segmentId) {
          document.getElementById(segmentId).scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
          })
      },
      async slideChanged(ev) {
          this.value = await ev.target.getActiveIndex();
      },
  },
  setup() {
      const d = new Date();
      const slideOpts = {
          initialSlide: (d.getDay()),
          speed: 400,
      }
      return { slideOpts }
  }
});
</script>

<style scoped>
ion-title {
    margin: .5em -0.5em;
    color: #3880ff;
}

ion-segment {
    padding: 2px;
}

ion-segment-button {
    min-width: auto;
    --background-checked: #3880ff;
    --color-checked: white;
    --border-radius: .4em;
    --margin-top: 4px;
    position: relative;
}

ion-segment-button::after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    right: 4px;
    border-radius: .4em;
    border: 1.25px #3880ff solid;
    box-shadow: 0px 0px 16px -4px #3881ff40;
}

.day-number {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
}

.weekday-name {
    font-size: 10px;
    font-weight: lighter;
    margin: 0;
}

#datepicker {
    margin-top: 1em;
    padding-left: .5em;
    font-size: 9pt;
    color: #3880ff;
}
</style>