<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <item-dicas></item-dicas>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import ItemDicas from '../components/ItemDicas.vue'

export default defineComponent({
  name: 'Colecao',
  components: {
    IonContent,
    IonPage,
    ItemDicas
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