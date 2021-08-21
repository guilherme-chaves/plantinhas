<template>
  <ion-page>
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
         <ion-input type="password" placeholder="sua senha atual"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="sua nova senha"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
      <ion-button expand="block" shape="round" class="botao">
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
         <ion-input type="email" placeholder="seu email"><ion-icon :icon="mail"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
      <ion-button expand="block" shape="round" class="botao">
        Salvar Alterações
      </ion-button>
     </div>
     </ion-col>
     </ion-row>
     </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { lockClosed, mail } from 'ionicons/icons';

export default defineComponent({
  name: 'Configuracao',
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
  },
  setup() {
    return{
      lockClosed,
      mail
    }
  }
});
</script>

<style scoped>
ion-icon{
  margin-left: 5%;
}

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
  color: #167D2E;
}

#input{
    margin-top: 5%;
}

#input ion-input { 
    border: 1px #167D2E solid; 
    border-radius: 2em;
    color: #167D2E;
}

.botao{
  margin: 1em;
  --background: #167D2E;
}
</style>