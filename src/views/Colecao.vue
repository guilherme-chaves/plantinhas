<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-note v-if="plantas.length == 0">Clique no botão + para adicionar uma nova planta</ion-note>
            <item-colecao v-else :lista="plantas"></item-colecao>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button @click="() => router.push('/colecao/novaplanta')">
            <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonNote, IonFab, IonFabButton, IonIcon} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import ItemColecao from '../components/ItemColecao.vue'
import { getPlantasUsuario } from '@/api/user';

export default defineComponent({
  name: 'Colecao',
  components: {
    IonContent,
    IonPage,
    ItemColecao,
    IonNote, IonFab, IonFabButton, IonIcon
  },
  setup() {
    const router = useRouter();
    const plantas = getPlantasUsuario();
    return{
      plantas,
      add,
      router
    }
  },
});
</script>

<style scoped>
ion-fab-button{
  --background: #70A333;
}
ion-note {
  position: absolute;
  top: 5vw;
  left: 10vw;
  right: 10vw;
  text-align: center;
}
</style>