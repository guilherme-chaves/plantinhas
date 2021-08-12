<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <p>Coleção</p>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button>
            <ion-icon :icon="add" @click="() => router.push('/novaplanta')"></ion-icon>
            </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';

export default defineComponent({
  name: 'Colecao',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return{
      add
    }
  },
});
</script>