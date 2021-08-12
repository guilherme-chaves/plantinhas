<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-card>
              <ion-card-content>
                <ion-avatar>
                  <ion-icon :icon="personCircleSharp"></ion-icon>
                </ion-avatar>
                <ion-label>Fulano</ion-label>
                <ion-chip>
                  <ion-label>Novato</ion-label>
                </ion-chip>
                <ion-note>
                  50 Pontos
                </ion-note>
              </ion-card-content>
            </ion-card>
            <ion-title>Troféus</ion-title>
            <ion-grid>
            <ion-row>
              <trofeus-conquista v-for="i in 6" :key="i"></trofeus-conquista>
            </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { personCircleSharp } from 'ionicons/icons';
import TrofeusConquista from '../components/TrofeusConquista.vue'

export default defineComponent({
  name: 'Conquistas',
  components: {
    IonContent,
    IonPage,
    TrofeusConquista,
  },
  setup(){
    return{
      personCircleSharp
    }
  }
});
</script>

<style scoped>
  ion-icon{
    font-size: 50px;

  }

  ion-card-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
  }

  ion-card-content > *{
    margin: 0;
  }

  ion-avatar{
    text-align: center;
    vertical-align: middle;
  }

  ion-title{
    text-align: center;
    font-size: 20px;
    line-height: 26px;
    color: #2699fb;
  }

</style>