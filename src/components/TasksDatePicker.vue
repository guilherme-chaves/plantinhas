<template>
    <div>
        <div id="datepicker">
            <ion-label>{{ getCurrentDate() }}</ion-label>
        </div>
        <div id="week-date">
            <ion-segment :value="getWeekDayName()" scrollable @ionChange="segmentChanged()">
                <ion-segment-button v-for="(day, index) in getWeekDays()" :key="day[0]" :value="day[0]" :id="'segment-'+index">
                    <ion-label class="day-number">{{ day[1] }}</ion-label>
                    <ion-label class="weekday-name">{{ day[0] }}</ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>
    </div>
</template>

<script lang="ts">
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TasksDatePicker',
  components: {
    IonLabel,
    IonSegment,
    IonSegmentButton
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
      getWeekDayName() {
          const d = new Date();
          return (d.toLocaleString("default", { weekday: "short" }).replace('.',''))
      },
      segmentChanged() {
          // pegar id do elemento e chamar função de scroll
          return (0)
      }
  }
});
</script>

<style scoped>
ion-segment {
    overflow: unset;
}
ion-segment-button {
    min-width: auto;
    --background-checked: #3880ff;
    --color-checked: white;
    --border-radius: .5em;
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
</style>