<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <p>Conquistas</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Conquistas',
  components: {
    IonContent,
    IonPage,
  }
});
</script>