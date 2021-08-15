<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <item-colecao></item-colecao>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import ItemColecao from '../components/ItemColecao.vue'

export default defineComponent({
  name: 'Colecao',
  components: {
    IonContent,
    IonPage,
    ItemColecao
  },
  setup() {
    const router = useRouter();
    return{
      add,
      router
    }
  },
});
</script>