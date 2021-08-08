<template>
    <ion-page>
        <ion-content>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home" href="/tabs/home">
                <ion-icon :icon="homeSharp"></ion-icon>
                <ion-label>Início</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="artigos" href="/tabs/artigos">
                <ion-icon :icon="documentSharp"></ion-icon>
                <ion-label>Artigos</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="colecao" href="/tabs/colecao">
                <ion-icon :icon="leafSharp"></ion-icon>
                <ion-label>Coleção</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="conquistas" href="/tabs/conquistas">
                <ion-icon :icon="trophySharp"></ion-icon>
                <ion-label>Conquistas</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="configuracao" href="/tabs/configuracao">
                <ion-icon :icon="settingsSharp"></ion-icon>
                <ion-label>Configuracao</ion-label>
            </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabs, IonRouterOutlet } from '@ionic/vue';
import { homeSharp, documentSharp, leafSharp, trophySharp, settingsSharp } from 'ionicons/icons';

export default defineComponent({
  name: 'AppFooter',
  components: {
      IonTabs,
      IonRouterOutlet
  },
  setup() {
    return { homeSharp, documentSharp, leafSharp, trophySharp, settingsSharp }
  }
});
</script>

<style scoped>
ion-tab-bar{
    --background: #3880ff;
    --color: white;
}
</style>