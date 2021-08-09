<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text slot="start"></ion-back-button>
            </ion-buttons>
            <ion-title color="primary">Plantinhas</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button text slot="end" menu="usuario"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonHeader,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonToolbar,
        IonMenuButton,
        } from '@ionic/vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
      IonHeader,
      IonButtons,
      IonBackButton,
      IonTitle,
      IonToolbar,
      IonMenuButton,
  }
});
</script>

<style scoped>
ion-toolbar{
    --background: white;
}

ion-title{
    text-align: center;
    margin-top: 1.3em;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

ion-buttons {
    color: #3880ff;
    margin-top: 0.7em;
    margin-right: 0;
    font-size: 20px;
}
</style>