<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <p>Inicio</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Inicio',
  components: {
    IonContent,
    IonPage,
  }
});
</script>