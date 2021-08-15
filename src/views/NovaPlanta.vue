<template>
  <ion-page>
     <ion-content :fullscreen="true"> 
     <ion-img src="https://via.placeholder.com/500x200.jpg"></ion-img>
     <ion-grid>
     <ion-row>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Nome</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="text" placeholder="Ex: Toninho"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Espécie</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="sua nova senha"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Estágio de desenvolvimento</strong>
     </div>
     </ion-col>
     <ion-card>
        <ion-card-header>
          <ion-card-title>
            <strong>Necessidades</strong>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <necessidades-planta></necessidades-planta>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <strong>Lembretes</strong>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <lembretes-planta></lembretes-planta>
        </ion-card-content>
      </ion-card>
     <ion-col size="12" size-sm>
     <div id="input">
      <ion-button expand="block" color="primary" shape="round" class="botao">
        Salvar
      </ion-button>
     </div>
     </ion-col>
     </ion-row>
     </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import NecessidadesPlanta from '../components/NecessidadesPlanta.vue'
import LembretesPlanta from '../components/LembretesPlanta.vue'

export default defineComponent({
  name: 'NovaPlanta',
  components: {
    IonContent,
    IonPage,
    IonButton,
    NecessidadesPlanta,
    LembretesPlanta
  },
  setup() {
      const router = useRouter();
      return { router };
 }
});
</script>

<style scoped>
#container{
  margin-top: 20px;
}

ion-card{
    padding: 8px;
    background: white;
    width: 100vw;
    margin: 16px 0 16px 0;
}
</style>