<template>
  <ion-page>
     <ion-content :fullscreen="true"> 
     <ion-grid>
     <ion-row>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Bem vindo ao app de plantinhas</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="email" placeholder="nome de usuario"><ion-icon :icon="personSharp"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="senha"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
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
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonFooter, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personSharp, lockClosed } from 'ionicons/icons';

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonFooter,
    IonButton,
  },
  setup() {
    return{
      personSharp,
      lockClosed
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
  text-align: center;
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