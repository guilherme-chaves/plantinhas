<template>
    <ion-card button @click="() => router.push('/colecao/planta/'+lista.userPlantId)">
        <ion-card-content>
            <ion-icon :icon="leafSharp"></ion-icon>
            <div>
            <ion-card-title>{{ lista.plantName }}</ion-card-title>
            <ion-card-subtitle>{{ lista.plantEsp }}</ion-card-subtitle>
            </div>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { } from '@ionic/vue';
import { defineComponent } from 'vue';
import { leafSharp } from 'ionicons/icons';
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'ItemColecao',
  props: {
    lista: Array,
  },
  components: {
  },
  setup() {
    const router = useRouter();

    return{
      leafSharp,
      router
    }
  },
});
</script>

<style scoped>
ion-icon{
    font-size: 30px;
    margin: auto 8px auto 0;
}

ion-card-content{
    display: inline-flex;
    justify-content: flex-start;
    align-content: center;
}

ion-icon, ion-card-title, ion-card-subtitle{
    color: #167D2E;
}
</style>