<template>
    <ion-page>
        <app-header></app-header>
        <app-side-menu></app-side-menu>
        <ion-content id="main-page-tabs">
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home" @click="() => router.push('/home')">
                <ion-icon :icon="homeSharp"></ion-icon>
                <ion-label>Início</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="artigos" @click="() => router.push('/artigos')">
                <ion-icon :icon="documentSharp"></ion-icon>
                <ion-label>Artigos</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="colecao" @click="() => router.push('/colecao')">
                <ion-icon :icon="leafSharp"></ion-icon>
                <ion-label>Coleção</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="conquistas" @click="() => router.push('/conquistas')">
                <ion-icon :icon="trophySharp"></ion-icon>
                <ion-label>Conquistas</ion-label>
            </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel ,IonRouterOutlet, IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { homeSharp, documentSharp, leafSharp, trophySharp, settingsSharp } from 'ionicons/icons';
import AppHeader from './AppHeader.vue';
import AppSideMenu from './AppSideMenu.vue'

export default defineComponent({
  name: 'AppFooter',
  components: {
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonLabel,
      IonRouterOutlet,
      IonPage,
      IonContent,
      AppHeader,
      AppSideMenu,
  },
  setup() {
    const router = useRouter();
    return { router, homeSharp, documentSharp, leafSharp, trophySharp, settingsSharp }
  }
});
</script>

<style scoped>
ion-tab-bar{
    --background: #3880ff;
}
ion-tab-button {
    --color: white;
    --color-selected: #ccd2ff;
    --background: #3880ff;
    --background-focused: #4c8dff;
}
ion-icon {
    font-size: 18px;
}
ion-label {
    font-size: 10px;
}
</style>