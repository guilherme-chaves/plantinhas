<template>
    <ion-col size="4">
        <ion-button class="botao-trofeu">
            <ion-icon :icon="trophyOutline" @click="setOpen(true)"></ion-icon>
        </ion-button>
    </ion-col>
</template>

<script lang="ts">
import { IonCol,
    IonButton,
    IonIcon,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { trophyOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TrofeusConquista',
  components: {
    IonCol,
    IonButton,
    IonIcon,
  },
  setup(){
    return{
      trophyOutline
    }
  }
});
</script>

<style scoped>
    ion-icon{
        font-size: 45px;
        color: white;
    }

    .botao-trofeu {
        margin: 0 auto 0 auto;
        vertical-align: middle;
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 4px;
        right: 4px;
        width: 27.5vw;
        height: 27.5vw;
        --background: #d7d8da;
        --border-radius: 50%;
        --border-color: white;
        --border-style: solid;
        --border-width: 4px;
    }

    .trofeu-obtido {
        --background: #3880ff;
    }

    .trofeu-obtido-novo {
        --background: #20ef70;
    }

    ion-col {
        height: 30vw;
        position: relative;
    }

</style>