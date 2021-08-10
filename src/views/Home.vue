<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <tasks-date-picker></tasks-date-picker>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import TasksDatePicker from '../components/TasksDatePicker.vue'

export default defineComponent({
  name: 'Inicio',
  components: {
    IonContent,
    IonPage,
    TasksDatePicker
  }
});
</script>