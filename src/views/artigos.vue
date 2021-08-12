<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-title><strong>Artigos</strong></ion-title>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Artigos',
  components: {
    IonContent,
    IonPage,
  }
});
</script>

<style scoped>
  ion-title{
    text-align: center;
    font-size: 25px;
    line-height: 26px;
    color: #2699fb;
  }
</style>