<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-card>
              <ion-card-content>
                <ion-avatar>
                  <ion-icon :icon="personCircleSharp"></ion-icon>
                </ion-avatar>
                <ion-label>{{user == undefined ? "Fulano" : user.userName}}</ion-label>
                <ion-progress-bar :value="getProgress"></ion-progress-bar>
                <ion-chip>
                  <ion-label>{{ getLevel }}</ion-label>
                </ion-chip>
                <ion-note>
                  {{ user.userPoints }} Pontos
                </ion-note>
              </ion-card-content>
            </ion-card>
            <ion-title>Troféus</ion-title>
            <ion-grid>
              <ion-row>
                <trofeus-conquista v-for="i in 6" :key="i" @click="openModal"></trofeus-conquista>
              </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonProgressBar,
  IonChip,
  IonNote,
  IonTitle,
  IonGrid,
  IonRow,
  modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personCircleSharp } from 'ionicons/icons';
import TrofeusConquista from '../components/TrofeusConquista.vue'
import ModalConquista from '../components/ModalConquista.vue'
import { getUserData } from "@/api/user";

export default defineComponent({
  name: 'Conquistas',
  data() {
    return {
        userProgress: {
          points: 50.0,
          targetPoints: 100.0,
        }
    }
  },
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonProgressBar,
    IonChip,
    IonNote,
    IonTitle,
    IonGrid,
    IonRow,
    TrofeusConquista,
  },
  computed: {
    getProgress(): number {
        return (this.user.userPoints / this.userProgress.targetPoints);
    },
    getLevel(): string {
      if(this.user.userLevel >= 0 && this.user.userLevel < 3) {
        return "Novato";
      } else if (this.user.userLevel >= 3 && this.user.userLevel < 6) {
        return "Aprendiz";
      } else if (this.user.userLevel >= 6) {
        return "Experiente";
      } else {
        return "Desconhecido"
      }
    }
  },
  methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalConquista,
          cssClass: 'modal',
          showBackdrop: true,
          backdropDismiss: true,
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    }
  },
  setup() {
    const { user, setUser } = getUserData();
    return{
      user,
      setUser,
      personCircleSharp
    }
  }
});
</script>

<style scoped>
  ion-progress-bar{
    color: #167D2E;
  }

  ion-icon{
    font-size: 52px;
    width:56px;
    height: 56px;
    margin: auto;
    position: relative;
  }

  ion-icon::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50%;
    border: 2px #167D2E solid;
  }

  ion-card {
    --background: white;
    color: #167D2E;
  }

  ion-card-content > ion-label {
    font-weight: bold;
    font-size: 16px;
  }

  ion-card-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    align-items: center;
    width: 50%;
    margin: auto;
  }

  ion-card-content > *{
    margin: 0 0 0 0;
  }

  ion-avatar{
    text-align: center;
    vertical-align: middle;
  }

  ion-title{
    text-align: center;
    font-size: 20px;
    line-height: 26px;
  }

  ion-chip {
    margin-top: 4px;
    background: #167D2E;
    --color: white;
  }

  ion-row {
    margin-top: 8px;
  }

  ion-progress-bar {
    --progress-background: #167D2E;
    --background: #167D2E24;
    margin: 4px 0;
  }

  .modal {
    color: #222;
  }

</style>