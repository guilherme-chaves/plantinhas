<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <p>Coleção</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Colecao',
  components: {
    IonContent,
    IonPage,
  }
});
</script>