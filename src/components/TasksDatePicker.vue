<template>
    <div>
        <div id="datepicker">
            <ion-label>{{ getCurrentDate() }}</ion-label>
        </div>
        <div id="week-date">
            <ion-segment v-model="value" scrollable @ionChange="segmentChanged($event)" id="segmentTabs">
                <ion-segment-button v-for="(day, index) in getWeekDaysF()" :key="day[0]" :value="index" :id="'segment-'+index">
                    <ion-label class="day-number">{{ day[1] }}</ion-label>
                    <ion-label class="weekday-name">{{ day[0] }}</ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>
        <ion-title>Tarefas</ion-title>
        <ion-slides @ionSlideDidChange="slideChanged($event)" :options="slideOpts" pager="false" ref="slides">
            <ion-spinner color="secondary" v-if="loading"/>
            <ion-slide v-else v-for="i in 7" :key="i">
                <task-list :slide="i" :tasks="tasks"></task-list>
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
    IonSlide,
    IonSpinner
} from '@ionic/vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineComponent, onBeforeMount } from 'vue';
import TaskList from "./TaskList.vue";
import { getCurrentDate, getWeekDaysF, getWeekDay, getWeekDayName } from '@/composables/dateFunctions.ts';
import { useState } from "@/composables/state.ts";
import { getTasksWeek } from "@/api/tasks.ts";

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
    TaskList,
    IonSpinner
  },
  methods: {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    let error;
    const slideOpts = {
          initialSlide: (d.getDay()),
          speed: 400,
    }
    
    onBeforeMount(async () => {
        try {
            setTasks(await getTasksWeek());
            setLoading(false);
        } catch (e) {
            console.log(e.message);
            error = `Error: ${e.message}`;
        }
    });
    return {
        tasks,
        error,
        loading,
        getCurrentDate,
        getWeekDaysF,
        getWeekDay,
        getWeekDayName,
        slideOpts
    }
  }
});
</script>

<style scoped>
ion-title {
    margin: .5em -0.5em;
    color: #167D2E;
}

ion-segment {
    padding: 2px;
}

ion-segment-button {
    min-width: auto;
    --background-checked: #167D2E;
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
    border: 1.25px #167D2E solid;
    box-shadow: 0px 0px 16px -4px #0c5f1f;
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
    color: #167D2E;
}
</style>