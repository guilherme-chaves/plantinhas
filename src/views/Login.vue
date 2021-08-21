<template>
  <ion-page>
    <ion-content :fullscreen="true"> 
     <div id="container">
        <strong>Bem vindo de volta!</strong>
     </div>
    </ion-content>

    <ion-footer>
     <ion-grid>
     <ion-row>
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
      <ion-button expand="block" shape="round" class="botao">
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
  --ion-background-color: linear-gradient(151deg, #70A333, #167D2E);
}

ion-row{
    margin-top: 10%;
}

#container {
  text-align: center;
  position: absolute;
  left: 10vw;
  right: 10vw;
  top: 20%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  color: white;
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

ion-footer{
  background: white;
  padding: 2em 0.5em 2em 0.5em;
}
</style>