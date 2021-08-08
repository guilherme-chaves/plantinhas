<template>
    <ion-page>
        <app-header></app-header>
        <ion-content :fullscreen="true">
            <p>Coleção</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import AppHeader from './AppHeader.vue';

export default defineComponent({
  name: 'Configuracao',
  components: {
    IonContent,
    IonPage,
    AppHeader,
  }
});
</script>