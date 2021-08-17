<template>
    <ion-page>
        <ion-content :fullscreen="true">
           <card-tutorial></card-tutorial>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import CardTutorial from '../components/CardTutorial.vue'

export default defineComponent({
  name: 'Tutorial',
  components: {
    IonContent,
    IonPage,
    CardTutorial
  },
  setup() {
      const router = useRouter();
      return { router };
 }
});
</script>