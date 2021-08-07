<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button :text="null" slot="start"></ion-back-button>
            </ion-buttons>
            <ion-title color="primary">Plantinhas</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
      IonTitle,
      IonToolbar
  }
});
</script>

<style scoped>
ion-toolbar{
    --background: white;
}

ion-title{
    text-align: center;
    padding-top: 1.3em;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

ion-back-button{
    --color: #3880ff;
    --icon-padding-top: 1em;
    --icon-margin-end: 0;
    --icon-font-size: 20px;
}
</style>