<template>
  <ion-page>
     <app-header></app-header>
     <ion-content :fullscreen="true"> 
     <ion-grid>
     <ion-row>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Alterar senha</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="sua senha atual"></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="sua nova senha"></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
      <ion-button expand="block" color="primary" shape="round" class="botao">
        Salvar Alterações
      </ion-button>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Alterar email</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="email" placeholder="seu email"></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
      <ion-button expand="block" color="primary" shape="round" class="botao">
        Salvar Alterações
      </ion-button>
     </div>
     </ion-col>
     </ion-row>
     </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-button expand="block" color="primary" shape="round" class="botao">
        Entrar
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import AppHeader from './AppHeader.vue';

export default defineComponent({
  name: 'Configuracao',
  components: {
    IonContent,
    IonPage,
    AppHeader,
  }
});
</script>

<style>
ion-content{
  --ion-background-color: white;
}

ion-row{
    margin-top: 10%;
}

#container {
  text-align: start;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  color: #2699fb;
}

#input{
    margin-top: 5%;
}

#input ion-input { 
    border: 1px #2699fb solid; 
    border-radius: 2em;
    color: #2699fb;
}

.botao{
  margin: 1em;
}
</style>